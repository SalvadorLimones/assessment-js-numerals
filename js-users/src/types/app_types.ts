//type used @ UserListPage, getUsers
export type UserProps = {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  status: string;
  updated_at: string;
  url: string;
};

//type used @ UserData component
export type UserDataProps = {
  user: UserProps;
  updateUserList: (user: UserProps) => void;
};

//type used @ SearchBar component
export type SearchBarProps = {
  setCurrentPage: (number: number) => void;
  firstName: string;
  setFirstName: (string: string) => void;
  lastName: string;
  setLastName: (string: string) => void;
};

//type used @ Pagination component
export type PaginationProps = {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (number: number) => void;
};
