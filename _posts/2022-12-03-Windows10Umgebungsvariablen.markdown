---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
![image](https://user-images.githubusercontent.com/75255909/205349051-8f201d63-f107-4553-97a4-4d7c96ed417b.png)

assumption: supposed i would have a test about readability
conclusion: the second dimension is possible without the the third

assumption: the propertyname is a member of a property in an other file
conclusion: controls can have members

assumption: readability has an aim
conclusion: the amount of an synonym is not an attribute

assumption: electricity is pure logic
conclusion: shortcuts are swirls

beings who maintain "farbverwaltung" cannot post datamembers everywhere
abstract post datamemebers somewhere

assumption: while enrgy flows within nature it is not only part of the nature at all
conclusion: organic nature evolved

last assumption today while typing: datamemebers and nods are the same and not calculating controls
last conclusion ecetera: the question is, can nodes be initiated?

![image](https://user-images.githubusercontent.com/75255909/205431353-16090c42-091d-40e7-871b-e578f7097c14.png)
2D picture model

![image](https://user-images.githubusercontent.com/75255909/205442657-77569fd8-25f1-4827-a3d0-a5fc69fd5459.png)

        Public Class Form1
          Public Class KeyboardHook
            Private Const HC_ACTION As Integer = 0
            Private Const WM_KEYBOARD_LL As Integer = 13
            Private Const WM_KEYDOWN = &H100
            Private Const WM_KEYUP = &H101
            Private Const WM_SYSKEYDOWN = &H104
            Private Const WM_SYSKEYUP = &H105

            Private Structure KBDLLHOOKSTRUCT
              Public vkCode As Integer
              Public scancode As Integer
              Public flags As Integer
              Public time As Integer
              Public dvExtraInfo As Integer
            End Structure

            Private Declare Function SetWindowsHookEx Lib "user 32“ _
            Alias "SetWindowsExA“ _
            (ByVal idHook As Integer,
            ByVal ipfn As KeyboardProcDelegate,
            ByVal hmod As Integer,
            ByVal dwThreadId As Integer) As Integer

            Private Declare Function CallNextHookEx Lib "user 32“ _
            (ByVal hHook As Integer,
            ByVal nCode As Integer,
            ByVal wParam As Integer,
            ByVal lParam As KBDLLHOOKSTRUCT) As Integer

            Private Declare Function UnhookWindowsHookEx Lib "user 32“ _
            (ByVal hHook As Integer) As Integer

            Private Delegate Function KeyboardProcDelegate _
            (ByVal nCode As Integer,
            ByVal wParam As Integer,
            ByRef lParam As KBDLLHOOKSTRUCT) As Integer

            Public Shared Event KeyDown(ByVal Key As Keys)
            Public Shared Event KeyUp(ByVal Key As Keys)

            Private Shared KeyHook As Integer
            Private Shared KeyHookDelegate As KeyboardProcDelegate

            Public Sub New()
              KeyHookDelegate = New KeyboardProcDelegate(AddressOf KeyboardProc)
              KeyHook = SetWindowsHookEx(WM_KEYBOARD_LL, KeyHookDelegate, System.Runtime.InteropServices.Marshal.GetHINSTANCE(System.Reflection.Assembly.GetExecutingAssembly.GetModules()(0)).ToInt32, 0)
            End Sub

            Private Shared Function KeyboardProc(ByVal nCode As Integer, ByVal wParam As Integer, ByRef lParam As KBDLLHOOKSTRUCT) As Integer

              If (nCode = HC_ACTION) Then
                Select Case wParam

                  Case WM_KEYDOWN, WM_SYSKEYDOWN

                    RaiseEvent KeyDown(CType(lParam.vkCode, Keys))
                  Case WM_KEYUP, WM_SYSKEYUP

                    RaiseEvent KeyUp(CType(lParam.vkCode, Keys))
                End Select
              End If

              Return CallNextHookEx(KeyHook, nCode, wParam, lParam)
            End Function
            Protected Overrides Sub Finalize()
              UnhookWindowsHookEx(KeyHook)
              MyBase.Finalize()
            End Sub
          End Class

          Public Track_n_Field As TextBox
          Private WithEvents kbHook As New KeyboardHook
          Private Sub kbHook_KeyDown(ByVal Key As System.Windows.Forms.Keys) Handles kbHook.KeyDown
            If Key = Keys.A Then
              Track_n_Field.Text = Track_n_Field.Text + "a“
            End If
            If Key = Keys.B Then
              Track_n_Field.Text = Track_n_Field.Text + "b“
            End If
            If Key = Keys.C Then
              Track_n_Field.Text = Track_n_Field.Text + "c“
            End If
          End Sub
          Sub WaterCaseVetement()
            Dim Track_n_Field As New TextBox()
            Controls.Add(Track_n_Field)
            With Track_n_Field
              .Multiline = True
              .Location = New Point(100, 200)
              .Size = New Size(262, 240)
            End With
          End Sub
          Sub Device()
            With Me
              .Size = New Size(303, 305)
            End With
          End Sub
          Public Sub New()
            InitializeComponent()
            WaterCaseVetement()
            Device()
          End Sub
        End Class

[GitHub Learning Lab](https://github.com/apps/github-learning-lab)

[Creating and highlighting code blocks](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

[ESCAPE CHARACTERS IN MARKDOWN](https://whatismarkdown.com/how-to-escape-markdown-characters/#:~:text=Markdown%20is%20not%20a%20new%20language%3B%20it%20is,common%20way%20is%20to%20use%20the%20backslash%20character.)
