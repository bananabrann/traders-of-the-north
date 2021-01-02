using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScreenManager : MonoBehaviour
{
    public static string currentScreen;
    
    public void setCurrentScreen(string newScreen) {
        // NOTE - Cannot be static.
        currentScreen = newScreen;
        Debug.Log("Current screen is now " + currentScreen);
    }
}
