// function longestRepetition(s) {
//     let l=0; // the length of the repetition
//     let c; // the longest consecutive repetition
//     if (s.length == 0) {
//         return ["",0];
//     } else {
//         for (let i = 0; i < s.length; i++) {
//             var firstChar = s[i];
//             for (let j = i+1; j < s.length; j++) {
//                 var nextChar = s[j];
//             }
//             if (firstChar === nextChar) {
//                 l++;
//                 c = firstChar;
//             }
//             else

//         }
//         console.log ([c, l]);
//     }
// }

// longestRepetition("aaaab");
function maxRepeating(str)
    {
        let len = str.length;
        let count = 0;
        
        // Find the maximum repeating character
        // starting from str[i]
        let res = str[0];
        for (let i=0; i<len; i++)
        {
            let cur_count = 1;
            for (let j=i+1; j<len; j++)
            {
                if (str[i] != str[j])
                    break;
                cur_count++;
            }

            // Update result if required
            if (cur_count > count)
            {
                count = cur_count;
                res = str[i];
            }
        }
        return [res, count];
    }

    // Driver code
    let str = "rrrraaaaffffbbaaccde";
    console.log(maxRepeating(str));