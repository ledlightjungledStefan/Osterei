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

[GitHub Learning Lab](https://github.com/apps/github-learning-lab)

[Creating and highlighting code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

[ESCAPE CHARACTERS IN MARKDOWN](https://whatismarkdown.com/how-to-escape-markdown-characters/#:~:text=Markdown%20is%20not%20a%20new%20language%3B%20it%20is,common%20way%20is%20to%20use%20the%20backslash%20character.)
