import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByTitle } from '../actions/filters'

import { Input, Select, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import postListFiltersStyle from '../assets/postListFiltersStyle'

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
    const { classes } = this.props
    return (
      <div className={classes['input-group']}>
        <div className={classes['input-group__item']}>
          <Input
            type="text"
            placeholder="Search posts"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div className={classes['input-group__item']}>
          <Select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <MenuItem value="date">Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(postListFiltersStyle)(BlogListFilters))