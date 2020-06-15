# Portfolio Julia Popko

## Install Jekyll

Run in your terminal `gem install jekyll bundler`

## Install Jekyll in your project

Create a new folder. Open it in terminal and run `bundle init`. Then open the Gemfile created and write `gem "jekyll"`. Create your first page. All set!

## Build for production

Open the folder in the terminal and type `jekyll build`

## Run website

Open the folder in the terminal and type `jekyll serve`. This automatically build the site and creates a host at the address [http://localhost:4000/](http://localhost:4000/)

## Upload project

Open Github Desktop, on the left bar type the summary of your changes (eg: Added project name), then click on `Commit to master`, and on the top bar click on `Push origin`. Done!

## Add modifications to content

### Add project

To add a project add a file in `/_projects/` with `name-of-file.md`. In the front matter (between ---) add:
```
---
layout: projects
title: Title
desc: Meta description
order: n (order in homepage list)
next_project: name_of_next_project
home_cover: name_picture_on_home.png
cover: name_of_cover.png
type: Type of project
desc_short: Short description displayed on homepage
---
```

After the front matter you can include every sections of the page. To do so type:
```
{%
     include section.html
     title="Title"
     content="Text"
%}
```

To include the sections showing with 2 columns:

```
{%
     include section-pictures.html
     title="Title"
     content="Text"
     image="name_of_image.png"
     alt_image="Alt text of image"
%}
```

To include the sections with one picture:

```
{%
     include section-prototype.html
     title="Title"
     image="name_of_image.png"
     alt_image="Alt text of image"
%}
```

To include the sections with one picture and a video:
Open your video in YouTube, click on `Share` then `Embed`, and copy the part in the src. Eg: `https://www.youtube.com/embed/CsGauHXioos`. Now add this in your file:

```
{%
     include section-prototype.html
     title="Title"
     image="name_of_image.png"
     alt_image="Alt text of image"
     prototype="https://www.youtube.com/embed/uPaFUEg2ROY"
%}
```

For help writing the `.md` file go here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
To add a class to the generated element add `{:.class}` before the line. To add it in a `li` add this at the beginning of the line `* {:.class-name} `

### Social links

Go to [Fajny website](https://fajny-css.github.io/icons.html) and select the logo of the social media you want to add. Copy the class of the `<i></i>`. Now open the file `/_data/social.yml` and write:
```
- name: name of social media
  link: https://www.link.com/
  icon: icon class
```

### CV

Put your new CV in the folder `/assets/images`. Then open the file `/about.md` and find the line `cv`. Change the link to the name of your new CV. Example:

```
cv: resume-julia-popko.pdf
```

### Add navigation item

Open `/_data/nav.yml` and write:
```
- title: Title displaying in the menu
  link: /path/to/page.html
```

## Edit layout

### General

Open the page `/_layouts/default.html` and edit this page. You can add other CSS or JS inside this one.

### Homepage

Edit the page `/_layouts/home.html`

### Project page

Edit the page `/_layouts/projects.html`

### About page

Edit the page `/_layouts/about.html`

### Header

Edit the page `/_includes/header.html`

### Footer

Edit the page `/_includes/footer.html`

## Edit design

### SCSS files

SCSS files are located in the folder `/_sass/`, and are automatically compiled to a minified CSS. To add a new SCSS file to the website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="/assets/css/name_of_file.css" />
```

### CSS files

CSS files are located in the folder `/assets/css/`. To add it to your website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="/assets/css/name_of_file.css" />
```

### CDN CSS files

To add it to your website add this in the `head` of your HTML in `/_layouts/default.html`:
```
<link rel="stylesheet" href="https://www.link-to-cdn.com/name_of_file.css" />
```