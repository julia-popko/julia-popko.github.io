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
desc: Meta desc
order: n (order on homepage)
cover: name_of_image.png
typeds:
  - Content of typed
screen_desktops:
  - image: name_of_image.png
    alt_image: Alt Text for image
screen_mobiles:
  - image: name_of_image.png
    alt_image: Alt Text for image

next_project: name_of_page (without.md)
---
```

After the front matter you can include every sections of the page. To do so type:
```
{%
     include section-projects.html
     background="color" (check in the page _sass/_colors.scss the names of colors)
     title="Title of the section"
     border=true|false (if you're in the Challenge section type true, else type false)
     2_col=true|false (if you're in the Design Process section type true, else type false)
     mockup_mobile=true|false (if the picture in Design process is a mobile mockup type true, else type false)
     style=true|false (if you're in the Style Tile section type true, else type false)
     img="name_of_image.png"
     alt_img="Alt text for image"
     content="Text of the section in markdown"
%}
```

To include the sections showing mockups type:

```
{%
     include section-mockups.html
     title="Title of section"
     background="color"
     proto_desktop=true|false (if you're showing desktop prototypes type true, else type false)
     proto=true|false (if you want to show a video type true, else type false)
     link_proto="http://www.link-to-embed-youtube.com"
%}
```

For help writing the `.md` file go here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
To add a class to the generated element add `{:.class}` before the line. To add it in a `li` add this at the beginning of the line `* {:.class-name} `

#### Video link

Open your video in YouTube, click on `Share` then `Embed`, and copy the part in the src. Eg: `https://www.youtube.com/embed/CsGauHXioos`

### Add experience

To add an experience open the file `/about.md` and write in the list `experiences`:
```
 - title: Title of experience
   city: City
   company: Name of company (not mandatory)
   date: Start date - End date
   description: "Small description"
   skills: Skills
```

### Add an education item

To add an experience open the file `/about.md` and write in the list `educations`:
```
- title: Title
  city: Berlin
  date: August - October 2019
  description: >-
     Description of education item
school: School
```

### Add a skill

Open the file `/about.md` and write in the list `skills`:
```
  - name: Name of skill
```

### Add a language

To add a language open the file `/about.md` and write in the list `languages`:
```
- name: Name of language
  level: Level of language
```

### Social links

Go to [Font Awesome website](https://fontawesome.com/icons?d=gallery) and select the logo of the social media you want to add. Copy the class of the `<i></i>`. Now open the file `/_data/social.yml` and write:
```
- name: name of social media
  link: https://www.link.com/
  icon: icon class
```

### CV

Put your new CV in the folder `/assets/images`. Then open the file `/about.md` and find the line `cv_link`. Change the link to the name of your new CV. Example:

```
cv_link: resume-julia-popko.pdf
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