from playwright.sync_api import Page, expect

def test_latest_changes(page: Page):
    """
    This test verifies all the latest changes:
    - The "About Me" section is visible.
    - The Hero text is positioned in the bottom left third.
    - The down arrow is centered at the bottom.
    """
    # 1. Arrange: Go to the application's homepage.
    page.goto("http://localhost:5173/")

    # 2. Assert: Check that the "About Me" title is visible.
    about_me_title = page.get_by_role("heading", name="About Me")
    expect(about_me_title).to_be_visible()

    # 3. Assert: Check that the Hero text container is positioned correctly.
    text_container = page.locator(".absolute.bottom-1\\/3.left-0")
    expect(text_container).to_be_visible()

    # 4. Assert: Check that the down arrow is in its new container.
    arrow_container = page.locator(".absolute.bottom-10.w-full.flex.justify-center")
    expect(arrow_container).to_be_visible()
    down_arrow = arrow_container.get_by_alt_text("Scroll down")
    expect(down_arrow).to_be_visible()

    # 5. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
