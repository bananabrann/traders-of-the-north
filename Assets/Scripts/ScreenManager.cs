using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScreenManager : MonoBehaviour
{
    [SerializeField] public GameObject currentScreen;
    [SerializeField] public GameObject targetScreen;

    public void changeToTargetScreen()
    {
        // NOTE -- I'm sure there's a way to do this without having to add a reference of
        // the current screen in the inspector, but MVP for now!

        // FIXME -- UnassignedReferenceException
        // This is probably due to the onClick button event and this script being different 
        // instances. Nooby mistake?
                
        currentScreen.SetActive(false);
        targetScreen.SetActive(true);
    }
}
