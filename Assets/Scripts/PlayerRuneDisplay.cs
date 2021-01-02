using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerRuneDisplay : MonoBehaviour
{
    private int health = 10;
    public Text healthText;

    void Update() {
        healthText.text = "HEALTH: " + health;

        if(Input.GetKeyDown(KeyCode.Space)) {
            health--;
        }
    }


}
