---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
° {::comment} ://ledlightjungledstefan.github.io/Osterei/blog {:/comment}
<br>
° {::comment} ://ledlightjungledstefan.github.io/Osterei/ {:/comment}
<br>
° RukolaSeiteEins
<br>
° solarplexus
<br>
° index

        Imports System.Text

        Public Class Form1
            Public MitDem_Verwoehnpas As New MyTextBox
            Public Sub New()
                MitDem_Verwoehnpas.SchildkroetenSchluessel(MitDem_Verwoehnpas)
                ' Dieser Aufruf ist für den Designer erforderlich.
                InitializeComponent()
                Me.Controls.Add(MitDem_Verwoehnpas)
                ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

            End Sub

            Private Sub Form1_Click(sender As Object, e As EventArgs) Handles Me.Click
                Me.ActiveControl = Nothing
                Form1_Enter(sender, e)
            End Sub

            Private Sub Form1_Enter(sender As Object, e As EventArgs) Handles Me.Enter
                Me.BackColor = Color.GreenYellow
            End Sub

            Public ix, slitter As Integer
            Public dest(5) As Char
            Sub Kein_Stress_beim_Essen(e As KeyEventArgs)
                Dim NumSticks As String
                NumSticks = MitDem_Verwoehnpas.Text.ToString
                Dim whilecatchOutsideoperators As New StringBuilder(NumSticks, 11) '

                For ix = 0 To slitter
                    If slitter < 27 Then
                        whilecatchOutsideoperators.CopyTo(ix * 1, dest, 1, 1)
                    End If
                Next ix
                Select Case e.KeyCode
                    Case Keys.Space
                        slitter += 1
                        Me.Invalidate()
                End Select
            End Sub

            Private Sub Form1_Paint(sender As Object, e As PaintEventArgs) Handles Me.Paint
                With e.Graphics
                    .DrawString(dest, New Font("Consolas", 22),
                    New SolidBrush(Color.FromArgb(151, 201, 104, 221)), New Point(50, 50))
                End With
            End Sub

            Private Sub Form1_KeyUp(sender As Object, e As KeyEventArgs) Handles Me.KeyUp
                Kein_Stress_beim_Essen(e)
            End Sub
        End Class

![image](https://user-images.githubusercontent.com/75255909/195294011-5675d6ce-f248-4196-9d3d-89a932e596a4.png)<br>
![image](https://user-images.githubusercontent.com/75255909/195293542-0c8bb60e-dd35-4797-9a59-bad9af8156a4.png)<br>

![image](https://user-images.githubusercontent.com/75255909/195293437-28c5372d-9bcf-4b38-a157-dbc742337ccf.png)<br>
![image](https://user-images.githubusercontent.com/75255909/195293383-284bbf16-107f-4806-9248-e4c4f2477506.png)<br>

![image](https://user-images.githubusercontent.com/75255909/193558846-d34c296f-3cbe-4566-9606-21305235cf31.png)
![image](https://user-images.githubusercontent.com/75255909/193559632-14f0cf35-3417-4bdf-a505-685634ea8ce4.png)

Kumul-Dattel
![image](https://user-images.githubusercontent.com/75255909/193556849-671685b7-aa5c-4994-8633-4ca0d7457d38.png)

[main_spot_tension](https://ledlightjungledstefan.github.io/Osterei/)<br>
[10.2 GitInternals - Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)

5.10.2022
16:29

Die löschung von Überschussware und eine Anpassung des action
Bereichs ausstehend. Logebene hab ich keine.

Soweit ich mich informieren konnte sollen Dateien die automatisch
in einer markdown Datei auf github eingefügt werden können

beim support beantragt zum löschen freigegeben werden.
Der Bereich für nicht auf der repository gespeichertem Inhalt

also copy and paste auf einer markdown Datei wurde usercontent
genannt und das was für mich mit pastebin möglich ist

ist auf github GIST.<br>
![image](https://user-images.githubusercontent.com/75255909/195041680-6795a2c3-e0b3-4ecb-a7e9-4252340ec463.png)
