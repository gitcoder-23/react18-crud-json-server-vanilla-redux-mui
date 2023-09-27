import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

// import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadAllUsers } from '../redux/actions/actions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const MainHome = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { loading, allUsers, isError } = useSelector((state) => state.users);
  console.log('allUsers-l=>', allUsers.length);
  useEffect(() => {
    dispatch(loadAllUsers());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  // const useStyle = makeStyles({
  //   table: {
  //     marginTop: 100,
  //     minWidth: 900,
  //   },
  // });

  // const classStyle = useStyle();

  if (loading) {
    return (
      <div className="loader-css">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <div className="add-user-button">
        <Button
          variant="contained"
          color="primary"
          style={{ float: 'right' }}
          onClick={() => console.log('add')}
        >
          Add User
        </Button>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#Sl.No</StyledTableCell>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Contact</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers &&
                allUsers.map((userData, index) => (
                  <StyledTableRow key={userData.id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {userData.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {userData.email}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {userData.contact}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {userData.address}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        variant="contained"
                        size="small"
                        color="info"
                        onClick={() => {}}
                      >
                        View
                      </Button>
                      &nbsp;
                      <Button
                        variant="contained"
                        size="small"
                        color="warning"
                        onClick={() => {}}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => {}}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default MainHome;
