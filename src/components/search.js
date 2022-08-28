import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <div className="flex items-baseline">
          {/* <!-- The button to open modal --> */}
          <label htmlFor="search-box" className="hover:bg-gray-200 rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mx-4 my-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type={"hidden"} />
          </label>

          {/* <!-- Put this part before </body> tag --> */}
          <input type="checkbox" id="search-box" className="modal-toggle" />
          <label htmlFor="search-box" className="modal cursor-pointer w-full">
            <label className="px-2 w-full max-w-2xl relative" >
              <input type="text" placeholder="Search" className="w-full rounded-lg ring-1 ring-gray-500 focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300" value={this.state.query} onChange={this.search} />
              <ul className="mt-2">
                {this.state.results.map(page => (
                  <li key={page.id} className="my-1 rounded-lg ring-1 ring-gray-500 bg-slate-800 text-gray-200 hover:text-amber-300">
                    <Link to={`/blog${page.path}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </label>
          </label>
        </div>

      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}