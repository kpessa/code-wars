Public Module Kata
    Public Function UnluckyDays(ByVal Year As Integer) as Integer
        Dim dc As New Globalization.GregorianCalendar

        Dim count as Integer
        
        For i = 1 To 12
            Dim dt As New DateTime(Year, i, 13)
            If dc.GetDayOfWeek(dt) = DayOfWeek.Friday Then count = count + 1
        Next
        
        Return count
    End Function
End Module

Imports NUnit.Framework

<TestFixture>
Public Class UnluckyDaysTest
    <Test>
    Public Sub BasicTests()
      Assert.AreEqual(1, Kata.UnluckyDays(1586))
      Assert.AreEqual(3, Kata.UnluckyDays(1001))
      Assert.AreEqual(2, Kata.UnluckyDays(2819))
      Assert.AreEqual(2, Kata.UnluckyDays(2792))
      Assert.AreEqual(2, Kata.UnluckyDays(2723))
      Assert.AreEqual(1, Kata.UnluckyDays(1909))
      Assert.AreEqual(2, Kata.UnluckyDays(1812))
      Assert.AreEqual(2, Kata.UnluckyDays(1618))
      Assert.AreEqual(1, Kata.UnluckyDays(2132))
      Assert.AreEqual(3, Kata.UnluckyDays(2065))
    End Sub
End Class