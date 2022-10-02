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

![image](https://user-images.githubusercontent.com/75255909/193438846-6da0b85c-b6e2-4e26-ae30-ca99d3cdef84.png)

![image](https://user-images.githubusercontent.com/75255909/193439235-978528c0-0dee-479f-b9e6-ccb2a9aff91b.png)
youtube video preset_pictures should 2MB or less

![image](https://user-images.githubusercontent.com/75255909/193439288-fef8066e-0182-48e6-b43d-a4ce6865d976.png)
\<s\>

leodotorg
![image](https://user-images.githubusercontent.com/75255909/193444425-4d74f848-0b04-4291-ab16-fd0510d477aa.png)

[Form.KeyPreview Property](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.form.keypreview?view=windowsdesktop-6.0)
Gets or sets a value indicating whether the form will receive key events before the event is passed to the control that has focus.

[Aggregation Operations (Visual Basic)](https://learn.microsoft.com/En-Us/Dotnet/visual-basic/programming-guide/concepts/linq/aggregation-operations)
10 + 5 = 15 12 + 3 = 15

case get 15 set 15 + 12 get 27

          If Not ToggleSwitch Then
              Define.Text = "Status: OFF"
          Else
              Define.Text = "Status: ON"
              Me.ActiveControl = Nothing
          End If
          
key events before the event is passed to the control that has focus.
<br>
            before the event is passed to the control that has focus.
            
      Private Sub Define_Leave(sender As Object, e As EventArgs) Handles Define.Leave
          MessageBox.Show(message)
      End Sub           

                Imports System.Enum
                Imports System.ComponentModel
                Imports System.Drawing.Text
                Imports System.IO
                Public Class Form1
                    Public WithEvents Tortenheber As New Label
                    Public WithEvents PflanzlichesGele As New ListBox
                    Public WithEvents Yoghurtarten As New ListBox
                    Dim FontObjList As New ArrayList
                    Dim ColorObjList As New ArrayList
                    Dim Family As FontFamily
                    Dim InstalledFonts As New InstalledFontCollection
                    Dim ColorNames(), ColorName As String
                    Dim cnvrt As TypeConverter = TypeDescriptor.GetConverter(GetType(KnownColor))
                    Dim message As String = Nothing
                    Dim path As String = "C:\Users\plane\OneDrive\Desktop\RadischienSalat\EmptyScript.txt"

                    'Dim ColorNames(), ColorName As String
                    '    ColorNames = System.Enum.GetNames(GetType(KnownColor))
                    '    Dim cnvrt As TypeConverter = TypeDescriptor.GetConverter(GetType(KnownColor))

                    'For Each ColorName In ColorNames
                    '        ColorObjList.Add(Color.FromKnownColor(cnvrt.ConvertFromString(ColorName)))
                    '    Next

                    '    SmoothieMixer.DataSource = ColorObjList

                    Public Sub New()

                        ' Dieser Aufruf ist für den Designer erforderlich.
                        InitializeComponent()

                        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.
                        Me.Controls.AddRange({Tortenheber, PflanzlichesGele, Yoghurtarten})
                        BrecherWerte(PflanzlichesGele)
                        BifidusKulturen(Yoghurtarten)
                        HekelPapier(Tortenheber)
                    End Sub

                    Sub BrecherWerte(KoordinatenSystem As ListBox)
                        For Each Family In InstalledFonts.Families
                            Try
                                FontObjList.Add(New Font(Family, 12))
                            Catch

                            End Try
                        Next
                        With KoordinatenSystem
                            .Location = New Point(100, 100)
                            .Size = New Size(300, 150)
                            .DataSource = FontObjList
                            .DisplayMember = "Name"
                        End With
                    End Sub
                    Sub BifidusKulturen(LuftfeuchtigkeitsWerte As ListBox)
                        ColorNames = GetNames(GetType(KnownColor))
                        For Each ColorName In ColorNames
                            ColorObjList.Add(Color.FromKnownColor(cnvrt.ConvertFromString(ColorName)))
                        Next
                        With LuftfeuchtigkeitsWerte
                            .Location = New Point(450, 100)
                            .Size = New Size(300, 150)
                            .DataSource = ColorObjList
                            .DisplayMember = "Name"
                        End With
                    End Sub
                    Sub HekelPapier(SchriftArten As Label)
                        Dim reader = My.Computer.FileSystem.ReadAllText(path & message)
                        With SchriftArten
                            .Location = New Point(200, 300)
                            .Size = New Size(450, 100)
                            .Text = reader
                            .DataBindings.Add("ForeColor", ColorObjList, "")
                            .DataBindings.Add("Font", FontObjList, "")
                        End With
                    End Sub
                    Async Sub KlasseStattMasse(message)
                        Dim secondletter As Char = "B"
                        Using writer As StreamWriter = File.CreateText(message)
                            Await writer.WriteAsync(secondletter)
                        End Using

                    End Sub
                    Private Sub Form1_Click(sender As Object, e As EventArgs) Handles Me.Click
                        Me.ActiveControl = Nothing
                        MessageBox.Show("")'riharstefan@aon.at
                    End Sub
                    Private Sub Form1_KeyUp(sender As Object, e As KeyEventArgs) Handles Me.KeyUp
                        Select Case e.KeyCode
                            Case Keys.Space
                                KlasseStattMasse(message)
                        End Select
                    End Sub
                End Class

![image](https://user-images.githubusercontent.com/75255909/193451991-6bdb16bb-5c51-4854-92a7-30a8f58834df.png)
![image](https://user-images.githubusercontent.com/75255909/193454119-ab00a5ea-59f4-4b10-842a-50ef716d747f.png)

ven da mal di einen niht auf di nerfen gen dan di andrn
