export const LOGO =
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const BANNER =
    "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjMxYTViM2IzMjNhZTZjYzc2MDZmZTcwNzU1MzkwZSIsIm5iZiI6MTc1MjIyNjY3MS4wMzQsInN1YiI6IjY4NzBkYjZmNWFiYmI2OWUzZDlhNTliZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hOr0zS3S8Em2mlr15QL7CXKwmGmlC8yu4hGh9u0-NOs",
    },
}

export const NOW_PLAYING_MOVIES_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1"

export const VIDEOS_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos`
