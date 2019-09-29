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

Open Github Desktop, on the left bar type the summary of your changes (eg: Added project name), then click on `Commit to master`, 

## Add modifications to content

### Add project

To add a project add a file in `/_projects/` with `name-of-file.md`. In the front matter (between ---) add:
```
---
layout: projects
title: Name of project
desc: Meta desc
order: n (number in the homepage list)
cover: name_of_asset.jpg
typeds:
  - title: Content of each typed phrases
introduction: >-
  {:.reveal}

  Content

challenge: >-
  {:.reveal}

  Content
picture_persona: name_of_picture.jpg
name_persona: Name
age_persona: Age
title_persona: Title
quotation_persona: Quote
environment_persona: Environment
frustrations_persona: Frustration
goals_persona: Goals
motivations_persona: Motivations
text_process: >-
  {:.reveal}

  Content
img_process: name_of_picture.jpg
alt_img_process: Alt text image
img_styles: name_of_picture.jpg
screen_desktops:
  - alt_image: Alt text
    image: name_of_picture.jpg
link_proto_desktop: http://wwww.link.com/
background_mobile: black OR white
screen_mobiles:
  - alt_image: Alt text
    image: name_of_picture.jpg
link_proto_mobile: http://wwww.link.com/
content_overview: >-
  {:.reveal}

  Content
next_project: name_of_page (without .md)
---
```
For help writing the `.md` file go here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
To add a class to the generated element add `{:.class}` before the line. To add it in a `li` add this at the beginning of the line `* {:.revealLeft} `

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