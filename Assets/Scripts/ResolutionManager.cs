using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ResolutionManager : MonoBehaviour
{
    public int width;
    public int height;

    public void SetWidth(int newWidth)
    {
        width = newWidth;
    }

    public void SetHeight(int newHeight)
    {
        height = newHeight;
    }

    public void SetScreenResolution() {
        // NOTE - Third parameter allows setting framerate
        Screen.SetResolution(width, height, false);  
    }

    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("ResolutionManager script has started!");
    }
}
