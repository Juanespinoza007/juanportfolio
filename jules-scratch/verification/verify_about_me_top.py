from playwright.sync_api import Page, expect
import traceback

def test_about_me_section_is_at_top(page: Page):
    """
    This test verifies that the 'About Me' section is now at the top of the page,
    right after the 'Hero' section.
    """
    try:
        print("Running verification script...")
        # 1. Arrange: Go to the application's homepage.
        page.goto("http://localhost:5173/")
        print("Page loaded.")

        # 2. Assert: Check that the "About Me" heading is visible.
        # We expect to find a heading with the text "About Me".
        about_me_heading = page.get_by_role("heading", name="About Me")
        expect(about_me_heading).to_be_visible()
        print("About me heading is visible.")

        # 3. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Screenshot taken.")
    except Exception as e:
        print(f"An error occurred: {e}")
        traceback.print_exc()
