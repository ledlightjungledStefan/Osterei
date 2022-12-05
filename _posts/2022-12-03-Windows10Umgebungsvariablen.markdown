---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
![image](https://user-images.githubusercontent.com/75255909/205431353-16090c42-091d-40e7-871b-e578f7097c14.png)
2D picture model

        Public Class Form1
            ReadOnly StormGap As New ListBox
            ReadOnly Universal As New Label
            ReadOnly BookMark As New ArrayList From {
                    New Schriftsteller("TheLastEntry", "Red"),
                    New Schriftsteller("DeepFake", "Green"),
                    New Schriftsteller("Storm and Weather", "Blue"),
                    New Schriftsteller("BlackVice", "Yellow"),
                    New Schriftsteller("AloneProved", "YellowGreen")
                }
            Public Sub New()

                InitializeComponent()

                With Me
                    .Size = New Size(1000, 550)
                    .Controls.AddRange({StormGap, Universal})
                End With

                SharedMembers(Universal)

                Gluecksspiel(StormGap)

                AddHandler StormGap.SelectedValueChanged, AddressOf StormGap_SelectedValueChanged
            End Sub
            Public Sub SharedMembers(KeinSchmerz_Notwendig As Label)
                With KeinSchmerz_Notwendig
                    .Location = New Point(350, 50)
                    .Size = New Size(250, 250)
                    .DataBindings.Add("BackColor", Color.FromName(BookMark.ToString), "")
                End With
            End Sub
            Public Sub Gluecksspiel(GierSchlund As ListBox)
                With GierSchlund
                    .DataSource = BookMark
                    .Location = New Point(54, 16)
                    .Size = New Size(240, 130)
                    .DisplayMember = "LongName"
                    .ValueMember = "ShortName"
                    .ClearSelected()
                End With
            End Sub
            Private Sub StormGap_SelectedValueChanged(ByVal sender As Object, ByVal e As EventArgs)
                Universal.BackColor = Color.FromName(StormGap.SelectedValue)
            End Sub
        End Class

        Public Class Schriftsteller
            Public myShortName As String
            Public myLongName As String

            Public Sub New(ByVal strLongName As String, ByVal strShortName As String)
                Me.myShortName = strShortName
                Me.myLongName = strLongName
            End Sub

            Public ReadOnly Property ShortName() As String
                Get
                    Return myShortName
                End Get
            End Property

            Public ReadOnly Property LongName() As String
                Get
                    Return myLongName
                End Get
            End Property

        End Class

[GitHub Learning Lab](https://github.com/apps/github-learning-lab)

[Creating and highlighting code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

[ESCAPE CHARACTERS IN MARKDOWN](https://whatismarkdown.com/how-to-escape-markdown-characters/#:~:text=Markdown%20is%20not%20a%20new%20language%3B%20it%20is,common%20way%20is%20to%20use%20the%20backslash%20character.)
