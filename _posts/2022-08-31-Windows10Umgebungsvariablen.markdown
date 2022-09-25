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

- Well. . . . . . . . .

EmptyScript.txt
Projektmappe "RadischienSalat" (1 von 1 Projekten)

Primäre Taste auswählen
Links

RadischienSalat
Sekundär Taste

Ordner in Datei-Explorer öffnen
Addressleiste Speicherort RadischienSalat

Sekundär Taste
Adresse als Text kopieren

Editor Entertaste Tabulatortaste
Kopie einfügen

Visual Studio Caret einschalten in der Datei EmptyScript.txt
Click an item in one of the lists above to change the font or color of this text.

Once the initial conditions are set up (i.e the binding) this operation happens
automatically

Sekundär Taste
Einfügen

Primär Taste
EmptyScript.txt speichern (Strg + S)

Nachdem ich auf meinem Blog keine Antwort erhielt möchte ich
darauf Hinweisen das von meinem Bahnhof zwei Trassen führen

und es noch nie einen Emeral Cahin Notfall gegeben hat sprich
das zwei Zuggarnituren versetzt in ein und die selbe Richtung

fuhren. Von anderen Städten und Dörfern auf dem Exoplaneten
ist mir auch nicht bekannt ob es sowas gab.

It's like calling from europe to alaska: we are on an exoplanet and you?
point of view (from your point of view)

hide the planet we live on from whom
(OPEN NOTPAD PRESS ENTER AND TABKEY IT IS NOT JUST A MOOD I HAVE NOT WRITTEN WINDOWS)

DO YOU REACH
PROJECTFOLDERNAME SECOND PRIMARY KEY OPEN FOLDER IN FILE EXPLORER

INPUT IN EDITOR
PRESS ENTERKEY PRESS TABKEY

GO BACK TO VISUAL STUDIO SELECT IN YOUR PROJECT IF YOU WANT THE MENTIONED TEXTFILE
PRESS SECONDARY MOUSE KEY SELECT COPY WHOLE PATH

GO BACK TO THE NOTEPAD INPUT
THE CONTENT

OPEN IF YOU ARE CONECTED TO A NETWORK
[File.CreateText(String) Methode](https://learn.microsoft.com/de-de/dotnet/api/system.io.file.createtext?view=net-6.0)

type in class on form1
YOU HAVE TO RESOLVE THE KEY OR THE KEYS FOR YOURSELF UNTIL KEYPRESS IS

NOT INTEGRATED IN YOUR ENVIRONMENT
DELET

REROOT AND KEEP AN EYE ON KEYUP EVENTS
STOP

    'comments with visual basic dot net are used through a apostrophe symbol
    'type Dim path As String = ""
    'Dim path As String
    'if possible try to build in the program paint on windows 10
    'an argument for the word key with a balance between path and insert
    'the insert key is one step below the print key
    'copy the third line in the opened notepad
    'use the mouse context menu or the schortkey abreviation with ctrl plus v
    'paste
    'C:\Users\plane\OneDrive\Desktop\RadischienSalat\EmptyScript.txt
    'C:\...\...\...\Desktop\RadischienSalat\EmptyScript.txt
    'i do not recognize my own environment in the internet
    'i asume some similarities

    Imports System.Enum
    Imports System.ComponentModel
    Imports System.Drawing.Text
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
            With SchriftArten
                .Location = New Point(200, 300)
                .Size = New Size(450, 100)
                .DataBindings.Add("ForeColor", ColorObjList, "")
                .DataBindings.Add("Font", FontObjList, "")
            End With
        End Sub
    End Class
