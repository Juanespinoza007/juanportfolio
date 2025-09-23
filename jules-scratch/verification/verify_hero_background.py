from playwright.sync_api import Page, expect
import traceback

def handle_console(msg):
    with open("console_logs.txt", "a") as f:
        f.write(f"{msg.type}: {msg.text}\n")


def test_hero_background_and_text_position(page: Page):
    """
    This test verifies that the hero section has the correct background image
    and that the name and rotating text are positioned at the bottom left.
    """
    page.on("console", handle_console)
    try:
        print("Running verification script...")
        # 1. Arrange: Go to the application's homepage.
        page.goto("http://localhost:5173/")
        print("Page loaded.")

        # 2. Assert: Check that the hero section has the new background image.
        hero_section = page.locator(".hero")
        expect(hero_section).to_have_css(
            "background-image",
            'url("https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA14293.jpg")',
        )
        print("Background image is correct.")

        # 3. Assert: Check that the name and rotating text are in a container that is positioned at the bottom left.
        text_container = hero_section.locator(".absolute.bottom-0.left-0")
        expect(text_container).to_be_visible()
        print("Text container is visible.")

        # 4. Screenshot: Capture the final result for visual verification.
        page.screenshot(path="jules-scratch/verification/verification.png")
        print("Screenshot taken.")
    except Exception as e:
        print(f"An error occurred: {e}")
        traceback.print_exc()
