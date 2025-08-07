function textAnalyze()
{
    let input = document.getElementById("paragraphInput").value
    let charCount = input.length
    let wordCount = input.split(" ").length
    let noSpace = charCount - (wordCount - 1)
    let sentenceCount = input.match(/[.!?]/g)
    let uniqueWords = [...new Set(input.split(" "))].length
    const freq={}
        input.split(" ").map((word)=>{
            freq[word] = (freq[word]||0)+1
        })
        for (let x in freq){
        console.log(x+":"+freq[x])
        }
    console.log( "frequency of words:"+ freq)
    console.log("no of unique words:"+ uniqueWords)
    console.log("character count :" + charCount)
    console.log("word count :" + wordCount)
    console.log("count without space:" + noSpace)
    console.log("no of sentence:" + sentenceCount)
    console.log("input:" + input)

   




}
