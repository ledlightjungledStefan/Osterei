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

Jaz sem sam.

    Public Class Form1
        Public WithEvents TheRest As New Button
        Public WithEvents Define As New Button
        Public Sub New()

            ' Dieser Aufruf ist für den Designer erforderlich.
            InitializeComponent()

            ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.
            FairWay(TheRest)
            Bunker(Define)
            Me.Controls.AddRange({TheRest, Define})
        End Sub
        Public Sub FairWay(Ignite As Button)
            With Ignite
                .Location = New Point(50, 50)
                .Size = New Size(100, 100)
                .Text = "Click me"
            End With
        End Sub
        Public Sub Bunker(Device As Button)
            With Device
                .Location = New Point(250, 50)
                .Size = New Size(100, 100)
                .Text = "Click me"
          End With
      End Sub

      Public ToggleSwitch As Integer
      Private Sub Define_Click(sender As Object, e As EventArgs) Handles Define.Click
          If Not ToggleSwitch Then
              Define.Text = "Status: OFF"
          Else
              Define.Text = "Status: ON"
          End If
          ToggleSwitch = Not ToggleSwitch
      End Sub

      Private Sub Define_Leave(sender As Object, e As EventArgs) Handles Define.Leave
          MessageBox.Show(message)
      End Sub

      Public message As String = "Hello, MessageBox!, Pumpkin_Device"
      Public Buttons As Integer = MessageBoxButtons.YesNo
      Public Result As DialogResult

      'Private Sub Define_Enter(sender As Object, e As EventArgs) Handles Define.Enter
      '    Result = MessageBox.Show(Me, message, Buttons)
      '    If Result = System.Windows.Forms.DialogResult.Yes Then

      '        Me.Close()

      '    End If
      'End Sub

      'Private Sub TheRest_Click(sender As Object, e As EventArgs) Handles TheRest.Click
      '    MessageBox.Show(message)
      'End Sub
    End Class

riharstefan@aon.at
![image](https://user-images.githubusercontent.com/75255909/193438846-6da0b85c-b6e2-4e26-ae30-ca99d3cdef84.png)

I KÄN SINK I KÄN FLAIJ I KÄN SINK I KÄN TAČ DÄ SKAIJ
MAIJ PONI IZ OVER VIS MI.
