# Documentation

## Install Jekyll on your computer

First download Xcode (you can find it in the App Store)

Now open your terminal and run these commands:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```
brew install ruby
```

```
curl -L https://get.rvm.io | bash -s stable
```

```
\curl -sSL https://get.rvm.io | bash -s stable —rails
```

```
ruby -v
```

```
sudo gem install bundler
```

```
sudo gem install -n /usr/local/bin/ jekyll
```

Jekyll is installed!

## Install Jekyll in your project

Create a new folder. Open it in terminal and run `bundle init`. Then open the Gemfile created and write `gem "jekyll"`. Create your first page. All set!

## Build for production

Open the folder in the terminal and type `jekyll build`

## Run website

Open the folder in the terminal and type `jekyll serve`. This automatically build the site and creates a host at the address [http://localhost:4000/](http://localhost:4000/)

## Add modifications to content

### Add project

To add a project add a file in `/_projects/` with `name-of-file.md`. In the front matter (between ---) add:
```
---
layout: projects
title: Title of project
order: Order of the project in the list on the homepage
desc: Description for meta
url: /projects/title-project.html
school: Name of school or Personal project
cover: name_of_image.jpg
next_project: name_of_next_project
images:
 - path: name_of_image.png
   col: number of columns in the row
   text: Title of the picture
   orientation: landscape or portrait
   alt: Alt text for the picture (usually same as text)
   link: https://www.link-to-project.com/ => not mandatory
   mockup: true or false => if the picture is in a phone / computer mockup write true, if not write false
   video: link to embed video on YouTube => not mandatory. To find the link, go to YouTube, click on share, select embed and copy the link between "" after src=
---
```

For help writing the `.md` file go here: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
To add a class to the generated element add `{:.class}` before the line. To add it in a `li` add this at the beginning of the line `* {:.class} `. 
If you want a link opening a new tab write `[Text displayed on the page](https://www.link.com){:target="_blank"}`. If not just don't write `{:target="_blank"}`
Always add the class {:.reveal} before each paragraph / titles to have the animation.

### Add experience

To add an experience open the file `/about.md` and write in the list `experiences`:
```
 - title: Title
   company: Company
   city: City
   date: Start date - End date
   job_description: "Job Description"
   skills: Skill
```

### Add an education item

To add an experience open the file `/about.md` and write in the list `educations`:
```
 - title: Title
   date: Start date - End date
   school: School
   city: City
   description: "Description of the studies"
```

### Add a skill

To add a skill put the logo in SVG or PNG centered in a transparent square (on Illustrator / Sketch / any design software) with dimensions 150x150px and add the file to `/assets/images/`. **Use SVG logos when possible**. Then open the file `/about.md` and write in the list `skills`:
```
 - title: Skill
```

### Add a language

To add a language open the file `/about.md` and write in the list `languages`:
```
 - title: Language level
```

### Social links and resume

#### In footer

Open the file `/_data/social.yml` and write:
```
- name: name-of-social-link
  icon: class_of_icon
  link: https://www.link-to-website.com/
```

Go here to have the classes of the icons: [https://fontawesome.com](https://fontawesome.com). Paste only what's inside the `class=""`

#### In the contact page

Do the header / footer step. Then open the page `/_layouts/contact.html` and add in the section `ul class="list-links"` 
```
{% if item.name == 'name-of-social-link' and item.link %}
<li class="revealLeft">
    <a href="{{ item.link }}" target="_blank" class="link-find" id="link-name-of-social-link">Nam<span></span></a>
</li>
{% endif %}
```
**Do not write the name in the li with its last letter.**

Then open the file `/_sass/_contact.scss` write in `.link-social`:
```
&#link-name-of-social::after {
    content: "last_letter";
}
```

### Add navigation item

Open `/_data/nav.yml` and write:
```
- title: Title displaying in the menu
  link: /path/to/page.html
```

## Upload the changes

Build the project for production (with `jekyll build` if you didn't serve it before). Then open Github Desktop, type the description of your changes in the field "Summary" (on the left), click on "Commit to master", and then click on "Push origin" on the top bar.

Done!