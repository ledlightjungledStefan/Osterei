---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
![image](https://user-images.githubusercontent.com/75255909/205431353-16090c42-091d-40e7-871b-e578f7097c14.png)
2D picture model

![image](https://user-images.githubusercontent.com/75255909/205513641-a041cb77-1a0e-427a-96ff-b73e7fcde863.png)

![image](https://user-images.githubusercontent.com/75255909/205513651-f072cb12-a480-4a40-819c-aa278d1f0c5c.png)

![image](https://user-images.githubusercontent.com/75255909/205513663-9da6eac0-e38c-4b43-8b8a-0279ddd408f4.png)

![image](https://user-images.githubusercontent.com/75255909/205513687-a7695fae-1989-4b42-988c-980ef15a217f.png)

![image](https://user-images.githubusercontent.com/75255909/205513713-c97c9416-23d7-469f-a53b-7b9130e3f04a.png)

![image](https://user-images.githubusercontent.com/75255909/205513733-5f7dc8fe-fb07-4cdd-af00-c0406d74dfd0.png)

        Public Class Form1
            ReadOnly ToCopyFrom As New ListBox
            Public Sub New()

                ' Dieser Aufruf ist für den Designer erforderlich.
                InitializeComponent()
                With Me
                    .Controls.Add(ToCopyFrom)
                End With
                ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.
                'DerivedMember(ToCopyFrom)
            End Sub
            Sub DerivedMember(Entries As ListBox)
                With Entries

                End With
            End Sub
        End Class

![image](https://user-images.githubusercontent.com/75255909/205514475-f83e7c33-0741-4122-90eb-b42cdba26265.png)

![image](https://user-images.githubusercontent.com/75255909/205514496-4952374a-b39b-459e-8bd8-fee2bcd5edf4.png)

![image](https://user-images.githubusercontent.com/75255909/205514825-80f59333-ac93-4cba-a739-da45e762b6de.png)

![image](https://user-images.githubusercontent.com/75255909/205515319-130f20f4-37ec-4df6-ad79-fd0b57e4b974.png)

![image](https://user-images.githubusercontent.com/75255909/205515346-5f5bda1a-7805-4720-a6f0-52bb77ca1716.png)

![image](https://user-images.githubusercontent.com/75255909/205515359-af479856-64fa-4440-bb51-5cc6aaaa5e8e.png)

![image](https://user-images.githubusercontent.com/75255909/205515782-750854dd-dcfd-4ca9-a910-39d9ed7a0d82.png)

![image](https://user-images.githubusercontent.com/75255909/205515819-230f7479-2d25-41ee-b95d-d1b762416dc8.png)

![image](https://user-images.githubusercontent.com/75255909/205515896-a7c37ad1-5fb9-4ca2-a01a-dbbb34866072.png)

![image](https://user-images.githubusercontent.com/75255909/205518350-2b7b2860-47a0-48af-9553-07b179c7cc71.png)

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#157878">
            <title>Document</title>
            <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/main.css">
            <script src="/assets/js/script.js" defer></script>
        <style>
            .element {
                        position: absolute;
                        left: 400px;
                        top: 600px;}
        </style>   
        </head>
        <body>
        <div class="container">
            <p class="draggable" draggable="true">1</p>
            <p class="draggable" draggable="true">2</p>
        </div>
        <div class="container">
            <p class="draggable" draggable="true">3</p>
            <p class="draggable" draggable="true">4</p>
        </div>
        </body>
        </html>
<!------>
        body {
            margin: 0;
        }

        .container {
            background-color: #333;
            padding: 1rem;
            margin-top: 1rem;
        }

        .draggable {
            padding: 1rem;
            background-color: white;
            border: 1px solid black;
            cursor: move;
        }

        .draggable.dragging {
            opacity: .5;
        }
<!------>
        const draggables = document.querySelectorAll('.draggable')
        const containers = document.querySelectorAll('.container')

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging')
            })
            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging')
            })
        })

        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault()
                const afterElement = getDragAfterElement(container, e.clientY)
                const draggable = document.querySelector('.dragging')
                if (afterElement == null) {
                    container.appendChild(draggable)
                } else {
                    container.insertBefore(draggable, afterElement)
                }
            })
        })
        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offset = y - box.top - box.height / 2
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element
        }

[GitHub Learning Lab](https://github.com/apps/github-learning-lab)

[Creating and highlighting code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

[ESCAPE CHARACTERS IN MARKDOWN](https://whatismarkdown.com/how-to-escape-markdown-characters/#:~:text=Markdown%20is%20not%20a%20new%20language%3B%20it%20is,common%20way%20is%20to%20use%20the%20backslash%20character.)
