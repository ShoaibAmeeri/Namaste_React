import sum from "../components/sum"

test("Sum function should be calculate the sum of two numbers",()=>{
    const result = sum(2,5)

    expect(result).toBe(7)

    const res = sum(4,5)
    expect(res).toBe(9)
})