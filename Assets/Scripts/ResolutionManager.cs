using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ResolutionManager : MonoBehaviour
{
    public int width;
    public int height;

    public void SetWidth(int newWidth)
    {
        Debug.Log("SetWidth called");
        width = newWidth;
    }

    public void SetHeight(int newHeight)
    {
        Debug.Log("SetHeight called");
        height = newHeight;
    }

    public void SetScreenResolution() {
        Debug.Log("SetScreenResolution called");
        // NOTE - Third parameter allows setting framerate
        Screen.SetResolution(width, height, false);  
    }

    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("ResolutionManager script has started!");
    }
}
