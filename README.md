# Rundgang 2024

Projects from the seminar "Funndamentals of Digital Design" @ HBK Braunschweig, created in winter 2023 and summer 2024.

See [rundgang2024.qawsed.site](https://rundgang2024.qawsed.site/).

---

Please add the following code to the top of your HTML files to link back to the main index:

```html
<div class="back-to-index-container">
  <style>
    .back-to-index-container {
      color: black;
      position: fixed;
      top: 0;
      right: 0;
      padding: 0.5rem;
      border: 1px dotted black;
      background-color: white;
      z-index: 1000;
      font-family: Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans',
        source-sans-pro, sans-serif;
      font-weight: normal;
    }

    .back-to-index {
      color: blue;
      text-decoration: underline;
    }

    a.back-to-index:hover {
      color: blueviolet;
    }
  </style>
  back to the <a href="/index.html" class="back-to-index">main index!</a>
</div>
```
