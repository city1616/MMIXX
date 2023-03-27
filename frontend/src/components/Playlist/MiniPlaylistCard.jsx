import styled from "styled-components"

const MiniPlaylistCard = ({ playlist }) => {
  const { coverImage, albumName } = playlist

  console.log(coverImage)
  return (
    <CardWrapper coverImage={coverImage}>
      <PlaylistTitle>
        {albumName}
      </PlaylistTitle>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.6) 90%),
    url(${({ coverImage}) => coverImage});
  background-size: cover;
  justify-content: start;
  align-items: end;
`
const PlaylistTitle = styled.p`
  padding: 10px;
  color: ${({theme}) => theme.palette.light}
`

export default MiniPlaylistCard