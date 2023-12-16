# vk-share

Provides a simple function that opens a new tab with a VK (VKontakte) social media sharing modal.

## Usage

The function accepts an object with url, title, and image passed as strings. The url field is the only mandatory field. It safely opens a new tab with a VK sharing modal window when called.

```
import { shareVk } from "vk-share";

shareVk({
    url: "https://example.com",
    title: "Title ",
    image: "https://some-site/some-picture.jpg",
  });
```