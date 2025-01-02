import React, { Fragment, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const url = 'https://jsonplaceholder.typicode.com';
/* 
    1. Mount
      useEffect(() => {},[])

    2. Update
      useEffect(() => {},[dependency])

    3. UnMount
     useEffect(() => {
          return () => {}
      },[])
*/

const Ex3 = () => {

    // Server Data State
    const [posts, setPosts] = useState([]);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(0); // starting index
    const [postsPerPage] = useState(9);
    const [currentPostPerPage, setCurrentPostPerPage] = useState([]); // current filtered data
    const [totalPages, setTotalPages] = useState(0); // Pagination count

    const getPosts = async () => {
        await fetch(`${url}/posts`)
         .then(response => response.json())
         .then(data => setPosts(data))
         .catch(err => console.error('Error:', err));
    }
    useEffect(() => {
        document.title = "Posts Store";
        getPosts();

        const totalPages = Math.ceil(posts.length / postsPerPage); // 100(No of Data) / 9 = 11.11(result) => Math.ceil(11.11) = 12(It takes highest number )
        setTotalPages(totalPages);

        const indexOfLastPost = currentPage + postsPerPage; // 9

        const currentItem = posts.slice(currentPage, indexOfLastPost); // 0-9 Index of Posts data
        setCurrentPostPerPage(currentItem); // Slice data inserted into the state

    }, [currentPage, posts, postsPerPage]);

    // Page Click Handler
    const handler = (e) => {
      console.log(e);
      setCurrentPage(Number(e.selected * postsPerPage));
    }

  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h5 className="display-3 ">useEffect Hook</h5>
                    <p className="text-secondary">useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.</p>
                    <p className="text-secondary">THAT GETS TRIGGER FOR componentDidMount, componentDidUpdate and componentWillUnmount lifecycle.</p>
                </div>
            </div>
        </div>
        <div className="container my-5">
          <div className="row">
            {
              currentPostPerPage.map(post => (
                <div key={post.id} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="card">
                    <div className="card-header">
                      <h5 className='card-title text-center'>{post.id} {post.title}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{post.body}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">

              <ReactPaginate
              className='pagination'
              pageCount={totalPages}
              pageClassName='page-item'
              pageLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              activeClassName='active'
              activeLinkClassName='active'
              onPageChange={handler}
              />

            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default Ex3