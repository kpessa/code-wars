Imports System

Public Module DryPotatoes

    Public Function Potatoes(ByVal p0 As Integer, ByVal w0 As Integer, ByVal p1 As Integer) As Integer
        Return w0 * (100-p0) \ (100-p1)
    End Function
    
End Module

Imports NUnit.Framework
Imports System

<TestFixture>
Public Class DryPotatoesTests   

    Sub dotest(ByVal p0 As Integer, ByVal w0 As Integer, ByVal p1 As Integer, ByVal exp As Integer)
        Dim ans As Integer = DryPotatoes.Potatoes(p0, w0, p1)
        Assert.AreEqual(exp, ans)
    End Sub
    
    <Test>
    Sub BasicTestsPotatoes()
        dotest(82, 127, 80, 114)
        dotest(93, 129, 91, 100)
        dotest(82, 134, 77, 104)
        
    End Sub
    
End Class