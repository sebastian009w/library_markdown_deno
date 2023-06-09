import { Markdown } from "../../cli/markdown.ts";
import { assertEquals, assert, assertInstanceOf } from "../dev_deps.ts";

const markdown = new Markdown();

Deno.test({
  name: "should return false",
  fn() {
    const resolve = markdown.is_file_markdown("main.ts");
    assertEquals(resolve, false);
  },
});

Deno.test({
  name: "should return true",
  fn() {
    const resolve = markdown.is_file_markdown("README.md");
    assert(resolve);
  },
});

Deno.test({
  name: "Should return true",
  fn() {
    const resolve = markdown.get_file_markdown(
      "markdown"
    );
    assertInstanceOf(resolve, Array);
  },
});

Deno.test({
  name: "should return true",
  fn() {
    const resolve = markdown.get_all_markdown(
      "markdown"
    );
    assertInstanceOf(resolve, Array);
  },
});
