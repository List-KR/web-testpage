const Addr = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-std-dynamic-subset.min.css'
const Hash = 'sha384-R9OhdG9P3VxaGgbw4uHBbK/h8tM/72L+JG7hiEMgYtB90NGlkD9YOfVUr+BP9Y4V'

export function LinkPretendard() {
  return (
    <link rel="stylesheet" href={Addr} integrity={Hash} crossOrigin="anonymous"></link>
  )
}