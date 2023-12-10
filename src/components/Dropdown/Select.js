import React, { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import axios from 'axios'
import './dropdown.css'

const Select = () => {

  const [types, setTypes] = useState([])
  const [isOpenSelect, setiOpenSelect] = useState(false)
  const [selectIndex, setSelectIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)

  const getAllTypes = async () => {

    await axios.get(`${process.env.REACT_APP_PRODUCTION_URL}/api/soummya/dealer/categories`).then((res) => {
      setTypes(res.data.data)
    }).catch((err) => {
      console.log(err)

    })

  }

  const openSelect = () => {
    setiOpenSelect(!isOpenSelect)
  }

  const closeSelect = (index, catName) => {
    setSelectedItem(catName)
    setSelectIndex(index)
    setiOpenSelect(false)
  }

  const filterList = (e) => {
    let keyword = e.target.value.toLowerCase()
    let filteredData = types.filter((item) => {
      return item.cat_name.toLowerCase().includes(keyword)
    })
    let filterData2 = filteredData.filter((item, index) => filteredData.indexOf(item) === index)
    setTypes(filterData2)
  }

  useEffect(() => {
    getAllTypes()
  }, [])

  return (
    <ClickAwayListener onClickAway={() => setiOpenSelect(false)}>
      <div className="selectDropWrapper cursor postion-relative">
        <span className="openSelect" onClick={openSelect}>{selectIndex === 0 ? "All Categories" : selectedItem}<ArrowDropDownIcon className="arrow" /></span>

        {
          isOpenSelect === true && (
            <div className="selectDrops">
              <div className="searchField">
                <input tyoe="text" placeholder="Search here...." onChange={filterList} />

              </div>
              <ul className="searchResults">
                <li value={0} className={`${selectIndex === 0 ? "active" : ""}`} onClick={() => closeSelect(0)}>All Products</li>
                {
                  types.map((ele) => (
                    <li value={ele.type} className={`${selectIndex === 0 ? "active" : ""}`} onClick={() => closeSelect(ele.type, ele.cat_name)}>{ele.cat_name}</li>
                  ))
                }



              </ul>
            </div>
          )
        }

      </div>

    </ClickAwayListener>


  )
}

export default Select