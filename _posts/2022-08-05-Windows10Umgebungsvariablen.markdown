---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---

Ich habe in meinem Zwischenspeicher einen Bildschirmdruck den ich mit der Drucktaste rechts neben der F12
Taste löste. In meinem Fall verwendte ich löste weil ich loslassen konnte von einer Massstabs treuen

Übersetzung der Speicherstellen. Der Bildschrimdruck ist mit einem Abbild meiner Visual Studio Oberfläche.
Mit dem nachfolgendem Beispiel habe ich mittlerweile den Versuch gestartet auch die Farbfläche zu ändern.

Ich werde mit dem Zeigegerätzeiger das Programm Paint mit einem Tippklick starten. Es ist schon offen dennoch
verwende ich das Wort starten nochmal. Und mit dem Befehl "Einfügen" im Karteikartenreiter "Start" den Bild

schirmdruck sehen. Den Bereich "Einfügen" zum lösen der Markierung um den Bildschirmdruck werde ich erst
Tippklicken wenn ich den Bildschirmdruck nach links oben verschoben haben werde.

Den Kontrolle FormEinsBereich, den oberen Rand, werde ich ausserhalb des sichtbaren Bereichs verschieben
nur um die Formoberfläche mit dem grauen Hintergrund von links oben nach rechts unten im linken oberen

sichtbaren Bereich des Programmes Paint loslassen zu können mit noch einem Tippklick des Befehls "Einfügen".
Mein Ziel ist es danach im Karteikartenreiter Anischt das Kontrollkästchen für das Linieal zu betätigen.

Nach dem Ziel fahre ich mit dem Zeiger des Zeigergerätes zur Formoberfläche mit dem grauen Hintergrund nach
rechts unten um mit dem gdrückt halten der Zeigergerättaste nach rechts oben fahren zu können.

Den markierten Bereich kann ich danach im Kartekartenreiter "Start" zuschneiden lassen. Der Befehl "Zuschneiden"
ist derzeit in einer Grautonfarbe die als Hinweis dient das der Befehl nicht betätigt werden kann.

Erst nach dem markieren ist eine Hinweisfarbe sichtbar die mit den schon gewonnen Erfahrungen als Hinweis dienen kann, dass
der Befehl verwendet werden könnte um nur den Teilbereich der zugeschnitten werden soll als Bearbeitungsoberfläche

zugeschnitten zu haben. Unter dem Befehl "Einfügen" im Karteikartenreiter "Start" ist ein kleiner Pfeil mit dem
mittels eines TippKlicks ein Panel geöffnet werden kann in dem der Befehl "Alles Auswählen" eingetragen ist.

Nach dem Auswählen kann ich eine Kopie der markierten Oberfläche drücken? Die Kopietaste? kann ich im Kontextmenü
finden. Das Kontextmenü kann ich mit einem TippKlick des Zeigergerätes öffnen lassen.

Und auf dieser Seite im Kontextmenü mit dem Befehl "Einfügen" laden lassen. Die "Form" hat nun auch eine ListBox.
Die LisBox ist auf der Kopie des Teilbereichs des Bildschirmdrucks nur eine grauer Rand mit weissem Hintergrund.

![image](https://user-images.githubusercontent.com/75255909/183038049-a2b9d3e5-bafb-4471-9b19-71c1e476d6d2.png)
Mit Windows, ich habe meine Windowsversion nicht mit anderen überprüft, ich schätze das gilt für mehrere

Windowsversionen, ist die Fläche die zugeschnitten wurde auch druckbarer Bereich und hat die Eigenschaft sich nach
dem Format des Druckerblattes, in meinem Fall das Format das ich nicht becherrsche A4, über die größere Fläche

eigentlich die gesamte Fläche des A4 Blattes aber nicht ganz, kommt auf die Seitenränder an, gedruckt. Also es wird
nicht nach dem Zuschnitt im vergleich zur restlichen Fläche des Programmes Paint der "ideale" Teilbereich gedruckt.

Nach meiner Frage auf der Seite
[MonkeyIslandSoft respektive Microsoft Q&A How to chose a fillrectangle color form a listbox list entry?](https://docs.microsoft.com/en-us/answers/questions/951468/how-to-chose-a-fillrectangle-color-form-a-lisbox-l.html?childToView=956177#comment-956177)

ist die Möglichkeit zwei ListBoxen zu haben und sowohl Farbe als auch Koordinaten zu ändern schon gewährleistet.
Meine "Insel" muss ich für mich denoch weiter bearbeiten mit den Themen DataSource, DataBindings und Attributs

den DataSource währen die schon gespeicherten Speicherstellen und DataBindings die Speicherstellen nach dem aktualisiern
mit der gewohnten und regional bekannten Rechenarchitektur.

Eine Eigenschaftenliste für Farben habe ich nur soweit in Reichweite, dass ich das Thema weiter führen lernen kann. Mit dem
Bildschirmdruck

![image](https://user-images.githubusercontent.com/75255909/183041648-01f1750a-0823-41da-9c84-3d530fe0b3cc.png)
währen in einem fertigen Programm neben den Farbnamen auch möglichen Eigenschaften berücksichtigbar.

[SET ein beliebtes Kartenspiel](https://ledlightjungledstefan.github.io/Osterei/assets/SET%20INSTRUCTIONS%20-%20GERMAN.pdf)
riharstefan@aon.at

[Meine Adresse und Telefonnummer](https://github.com/ledlightjungledStefan/Osterei/blob/gutenberggnu/_includes/adressof_dateiformat.png))
![image](https://user-images.githubusercontent.com/75255909/179389068-463fa241-6681-4b4b-8cfb-0b2173e26bf2.png)

![image](https://user-images.githubusercontent.com/75255909/179389093-ff10e30f-ffaf-4a7c-8a62-1b77ec399f16.png)
![image](https://user-images.githubusercontent.com/75255909/179389143-4f8e0409-a5b0-4e24-8a2a-56ce005c3b85.png)

![image](https://user-images.githubusercontent.com/75255909/179389160-e7e6c27b-0655-41d1-875d-13946562ef14.png)
![image](https://user-images.githubusercontent.com/75255909/179389170-dc39cad9-d3b1-468d-ac83-206a11e989aa.png)

    Public Class Form1
    Public WithEvents DimensionButton As New Button
    Public WithEvents SplinterTextBox As New TextBox
    Public WordChar As String
    Public Sub New()

        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()
        Me.Controls.Add(SplinterTextBox)
        SchildkroetenSchluessel(SplinterTextBox)
        Me.Controls.Add(DimensionButton)
        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

    End Sub
    Sub StoerStrom(HandKante As Button)
        With HandKante
            .Location = New Point(50, 50)
            .Size = New Size(50, 50)
        End With
    End Sub
    Sub SchildkroetenSchluessel(Ipanema As TextBox)
        With Ipanema
            .Location = New Point(650, 300)
            .AutoSize = True
            .Multiline = True
            .AcceptsReturn = True
            .WordWrap = False
            .Text = WordChar
        End With
    End Sub
    Private Sub AutoSizeTextBox(ByVal SplinterTextBox As TextBox)
        Const x_margin As Integer = 0
        Const y_margin As Integer = 2
        Dim size As Size = TextRenderer.MeasureText(SplinterTextBox.Text, SplinterTextBox.Font)
        SplinterTextBox.ClientSize = New Size(size.Width + x_margin, size.Height + y_margin)
    End Sub

    Private Sub SplinterTextBox_TextChanged(sender As Object, e As EventArgs) _
        Handles SplinterTextBox.TextChanged
        AutoSizeTextBox(TryCast(sender, TextBox))
    End Sub

    Private Sub Form1_Paint(sender As Object, e As PaintEventArgs) Handles Me.Paint
        FillRectangleRectangle(e)
    End Sub
    Public WordOne, WordTwo, WordThree, WordFour As String
    Private Sub FillRectangleRectangle(ByVal e As PaintEventArgs)

        ' Create solid brush.
        Dim blueBrush As New SolidBrush(Color.Blue)

        ' Create rectangle.
        Dim rect As New Rectangle(WordOne, WordTwo, WordThree, WordFour)

        ' Fill rectangle to screen.
        e.Graphics.FillRectangle(blueBrush, rect)
    End Sub
    Public tempArray(3) As String
    Private Sub DimensionButton_Click(sender As Object, e As EventArgs) Handles DimensionButton.Click
        tempArray = SplinterTextBox.Lines
        WordOne = Convert.ToInt32(tempArray(0))
        WordTwo = Convert.ToInt32(tempArray(1))
        WordThree = Convert.ToInt32(tempArray(2))
        WordFour = Convert.ToInt32(tempArray(3))
        Me.Invalidate()
    End Sub
    End Class
