using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameState : MonoBehaviour
{
    private static int[] playerRunes;
    private static int[] opponentRunes;
    private static object stockpile;

    public static string whosTurn;

    // Start is called before the first frame update
    void Start()
    {
        whosTurn = "player";
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
