from playwright.sync_api import Page, expect

def test_hero_text_position(page: Page):
    """
    This test verifies that the hero text is positioned in the bottom left third of the screen.
    """
    # 1. Arrange: Go to the application's homepage.
    page.goto("http://localhost:5173/")

    # 2. Assert: Check that the text container is positioned correctly.
    text_container = page.locator(".absolute.bottom-1\\/3.left-0")
    expect(text_container).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
