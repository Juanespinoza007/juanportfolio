from playwright.sync_api import Page, expect

def test_hero_sentence_and_arrow(page: Page):
    """
    This test verifies that the new sentence and the down arrow are visible in the hero section.
    """
    # 1. Arrange: Go to the application's homepage.
    page.goto("http://localhost:5173/")

    # 2. Assert: Check that the new sentence is visible.
    new_sentence = page.get_by_text(
        "Pioneering the space exploration and defense industry with AI"
    )
    expect(new_sentence).to_be_visible()

    # 3. Assert: Check that the down arrow is visible.
    down_arrow = page.get_by_alt_text("Scroll down")
    expect(down_arrow).to_be_visible()

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
