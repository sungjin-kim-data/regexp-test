const str =`
010-1111-1111
tyms06034@gmail.com
https://www.itthere.co.kr
The  Quich brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?=@).{1,}/g)
)