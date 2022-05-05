Public Module Kata
    Public Function RowSumOddNumbers(ByVal n As Integer) As Integer
        Dim lIdx As Integer, rIdx As Integer

        lIdx = (n - 1) * n \ 2
        rIdx = n * (n + 1) \ 2

        Dim sum As Integer
        For i = 0 To rIdx - lIdx - 1
            sum = sum + (lIdx + i) * 2 + 1
        Next
        
        Return sum
    End Function
End Module

Imports NUnit.Framework

<TestFixture>
Public Class KataTest
    <Test>
    Public Sub BasicTests()
        Assert.AreEqual(1, Kata.RowSumOddNumbers(1))
        Assert.AreEqual(8, Kata.RowSumOddNumbers(2))
        Assert.AreEqual(2197, Kata.RowSumOddNumbers(13))
        Assert.AreEqual(6859, Kata.RowSumOddNumbers(19))
        Assert.AreEqual(68921, Kata.RowSumOddNumbers(41))
        Assert.AreEqual(74088, Kata.RowSumOddNumbers(42))
        Assert.AreEqual(405224, Kata.RowSumOddNumbers(74))
        Assert.AreEqual(636056, Kata.RowSumOddNumbers(86))
        Assert.AreEqual(804357, Kata.RowSumOddNumbers(93))
        Assert.AreEqual(1030301, Kata.RowSumOddNumbers(101))
    End Sub
End Class