import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters'

export class BlogListFilters extends Component {
  onTextChange = e => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    }
    if (e.target.value === 'title') {
      this.props.sortByTitle()
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search posts"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle())
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogListFilters)