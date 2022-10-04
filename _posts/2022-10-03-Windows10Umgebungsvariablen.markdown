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

Jaz sem sam. Inzerum. Inn the room.
![image](https://user-images.githubusercontent.com/75255909/193558846-d34c296f-3cbe-4566-9606-21305235cf31.png)

![image](https://user-images.githubusercontent.com/75255909/193559632-14f0cf35-3417-4bdf-a505-685634ea8ce4.png)
Kumul-Dattel
<br>

![image](https://user-images.githubusercontent.com/75255909/193556849-671685b7-aa5c-4994-8633-4ca0d7457d38.png)
![image](https://user-images.githubusercontent.com/75255909/193557449-d51498da-e02c-45a9-ba3c-2dcda80a95db.png)

Hallo? "A creators dilema".
'MessageBox.Show("")

<!------>

        Public WithEvents TheRest As New Button

<!------>

        FairWay(TheRest)

<!------>

           Public Sub FairWay(Ignite As Button)
                With Ignite
                    .Location = New Point(50, 50)
                    .Size = New Size(100, 100)
                    .Text = "Click me"
                End With
            End Sub

<!------>

[HTML <s> Tag](https://www.w3schools.com/tags/tag_s.asp)
        \<p\>\<s\>Only 50 tickets left!\<\/p\>\<\/s\></s>

<!------>        
        
\<p\>Ignite\<\/p\>
NAA

<!------>        
        
![image](https://user-images.githubusercontent.com/75255909/193923749-a37a6647-51b7-4708-8fc3-992e355616cb.png)

<!------>        

[Control.KeyPress Event](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.control.keypress?view=windowsdesktop-6.0)
        <br>
        
[How can I detect the pressed key in VB.NET](https://stackoverflow.com/questions/50794158/how-can-i-detect-the-pressed-key-in-vb-net)

<!------>        
        
        Public Class Form2

            ' Handle the KeyDown event to print the type of character entered into the control.
            Private Sub TextBox1_KeyDown(sender As Object, e As KeyEventArgs) Handles TextBox1.KeyDown
                TextBox2.AppendText($"KeyDown code: {e.KeyCode}, value: {e.KeyValue}, modifiers: {e.Modifiers}" + vbCrLf)
            End Sub

            ' Handle the KeyPress event to print the type of character entered into the control.
            Private Sub TextBox1_KeyPress(sender As Object, e As KeyPressEventArgs) Handles TextBox1.KeyPress
                TextBox2.AppendText($"KeyPress keychar: {e.KeyChar}" + vbCrLf)
            End Sub

            ' Handle the KeyUp event to print the type of character entered into the control.
            Private Sub TextBox1_KeyUp(sender As Object, e As KeyEventArgs) Handles TextBox1.KeyUp
                TextBox2.AppendText($"KeyUp code: {e.KeyCode}, value: {e.KeyValue}, modifiers: {e.Modifiers}" + vbCrLf)
            End Sub

        End Class

<!------>        

The second answer on the stackoverflow site
with the case that a value is 13

is not only significant, because if i have 13 stones in a wood
<p>e.KeyValue = 13</p>

a "Papierhaushaltsrollenblatt"
![image](https://user-images.githubusercontent.com/75255909/193935186-0e74ed6f-8f8d-4db1-8e60-079b1f8f1dcf.png)

one leave, can hold 13 mililiters (of) water.
If water vaporates more than one milliliter
        
than an array in such a case holds less then 12 milliliters.
An array value is not the same as a countable mass value.
        
Mobile cell can be screens but also boards to evade screens.
If taborder is not important on a screen it is still
        
on a chip.
[Control.TabIndex Property](https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.control.tabindex?view=windowsdesktop-6.0)
        
THIS IS ONE METHOD BUT THE EVENT IS MISSING NOT ONLY B FULLSTOP        
        
        ' Add a button to a form and set some of its common properties.
        Private Sub AddMyButton()
           ' Create a button and add it to the form.
           Dim button1 As New Button()

           ' Anchor the button to the bottom right corner of the form
           button1.Anchor = AnchorStyles.Bottom Or AnchorStyles.Right

           ' Assign a background image.
           button1.BackgroundImage = imageList1.Images(0)

           ' Specify the layout style of the background image. Tile is the default.
           button1.BackgroundImageLayout = ImageLayout.Center

           ' Make the button the same size as the image.
           button1.Size = button1.BackgroundImage.Size

           ' Set the button's TabIndex and TabStop properties.
           button1.TabIndex = 1
           button1.TabStop = True

           ' Add a delegate to handle the Click event.
           AddHandler button1.Click, AddressOf Me.button1_Click

           ' Add the button to the form.
           Me.Controls.Add(button1)
        End Sub        
        
<!------>
        
        Imports System.Enum
        Imports System.ComponentModel
        Imports System.Drawing.Text
        Imports System.IO
        Public Class Form1
            Public WithEvents Tortenheber As New Label
            Public WithEvents PflanzlichesGele As New ListBox
            Public WithEvents Yoghurtarten As New ListBox
            Public FontObjList As New ArrayList
            Public ColorObjList As New ArrayList
            Public Family As FontFamily
            Public InstalledFonts As New InstalledFontCollection
            Public ColorNames(), ColorName As String
            Public cnvrt As TypeConverter = TypeDescriptor.GetConverter(GetType(KnownColor))
            Public message As String = Nothing
            Public path As String = "C:\Users\plane\OneDrive\Desktop\RadischienSalat\EmptyScript.txt"

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
                'MessageBox.Show("")
            End Sub
            Private Sub Form1_KeyUp(sender As Object, e As KeyEventArgs) Handles Me.KeyUp
                Select Case e.KeyCode
                    Case Keys.Space
                        MessageBox.Show("rEGRETED")
                        'KlasseStattMasse(message)
                        Tortenheber.Text = "Text Changed"
                End Select
            End Sub
        End Class
