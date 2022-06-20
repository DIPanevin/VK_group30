function AwsomeOut (AddStr,Count) {
    let i_3 = 1;
    AddStr = AddStr.slice(0,1);
    while (i_3 <= Count) {
        let NewString = '';
        for (let StrLen = 1; StrLen <= Count; StrLen++) {
            if (i_3%2 !== 0) 
                if ((StrLen <= Math.round(Count-i_3)/2) || (StrLen >= Math.round(Count/2)+i_3/2))
                    NewString = NewString + ' '
                    else 
                        NewString = NewString + AddStr;
                else if (StrLen == Math.round(Count/2)) 
                        NewString = NewString + '|';
                        else
                        NewString = NewString + ' '   
        }    
        console.log(NewString); //+ ' ' + i_3);    
        i_3++;
    }
}

console.log('Вне конкурса');
AwsomeOut('8',23);