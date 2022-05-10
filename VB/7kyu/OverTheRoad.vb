Public Module CodeWars
    
    Public Function OverTheRoad(ByVal address as Long, ByVal n as Long)
        Return n*2 - address + 1 
    End Function
    
End Module

Imports NUnit.Framework

<TestFixture>
Public Class BasicTests
    <Test>
    Public Sub BasicTestCases()
        Assert.AreEqual(6, CodeWars.OverTheRoad(1, 3))
        Assert.AreEqual(4, CodeWars.OverTheRoad(3, 3))
        Assert.AreEqual(5, CodeWars.OverTheRoad(2, 3))
        Assert.AreEqual(8, CodeWars.OverTheRoad(3, 5))
        Assert.AreEqual(16, CodeWars.OverTheRoad(7, 11))
    End Sub
End Class