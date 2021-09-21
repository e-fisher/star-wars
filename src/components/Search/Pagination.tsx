import styled from "styled-components"

const Container = styled.div`
  margin: 10px 0;
  text-align: center;
`


const PageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:disabled {
    text-decoration: underline;
    cursor: default;
  }
`

type PaginationProps = {
  count: number,
  page: number,
  setPage: (page: number) => void,
  perPage?: number,
}

const Pagination = ({ count, page, setPage, perPage = 10 }: PaginationProps) => {
  const numPages = Math.ceil(count / perPage)

  if (numPages === 1) { return null }

  const pages = Array.from(Array(numPages)).map((_, i) => {
    const pageIndex = i + 1

    return (
      <PageButton onClick={() => setPage(pageIndex)} disabled={page === pageIndex} key={pageIndex}>
        {pageIndex}
      </PageButton>
    )
  })

  return (
    <Container>
      {pages}
    </Container>
  )
}

export default Pagination
