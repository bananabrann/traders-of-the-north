using System.Collections;
using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]

public class FadeInSprite : MonoBehaviour
{
	public float fadeInDuration = 2.0f; // Duration for the fade in, in seconds.
	private SpriteRenderer spriteRenderer;

	private void Awake()
	{
		spriteRenderer = GetComponent<SpriteRenderer>();

		// Start with the sprite fully transparent.
		Color startColor = spriteRenderer.color;
		startColor.a = 0;
		spriteRenderer.color = startColor;
	}

	private void Start()
	{
		StartCoroutine(FadeIn());
	}

	IEnumerator FadeIn()
	{
		float elapsed = 0f;

		Color startColor = spriteRenderer.color;
		Color endColor = startColor;
		endColor.a = 1;

		while (elapsed < fadeInDuration)
		{
			elapsed += Time.deltaTime;
			spriteRenderer.color = Color.Lerp(startColor, endColor, elapsed / fadeInDuration);
			yield return null;
		}

		spriteRenderer.color = endColor; // Ensure we end up with the final color.
	}
}
