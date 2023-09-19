import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "@/redux/actions/categoryActions";
import { StatusContext } from "@/store/StatusContextProvider";
import Loader from "@/components/ui/Loader";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import { getTimestamp } from "@/utils/Helpers";
import UpdateCategoryModal from "./Modals/Category/UpdateCategoryModal";
import DeleteCategoryConfirmModal from "./Modals/Category/DeleteCategoryConfirmModal";
import AddCategoryModal from "./Modals/Category/AddCategoryModal";
import Image from "next/image";

export default function AllCategories() {
  const dispatch = useDispatch();
  const { categories, categoriesCount, error, loading } = useSelector(
    (state) => state.allCategories
  );

  const { setError } = useContext(StatusContext);

  const [activeTable, setActiveTable] = useState("allCategoriesTable");
  const [isUpdateCategoryModalOpen, setUpdateCategoryModalOpen] =
    useState(false);
  const [isDeleteCategoryModalOpen, setDeleteCategoryModalOpen] =
    useState(false);
  const [isAddCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState("");
  const [categoryToDelete, setCategoryToDelete] = useState("");

  useEffect(() => {
    if (error) {
      setError({
        title: "Something went wrong",
        message: error,
        showErrorBox: true,
      });
      dispatch(clearErrors());
    }
  }, [error]);

  return loading ? (
    <Loader />
  ) : categories && categories.length > 0 ? (
    <div className="grid w-full mt-10 overflow-scroll">
      <div className="flex justify-between w-full">
        <ul
          className="items-start nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tables"
          role="tablist"
        >
          <li
            className="nav-item"
            role="presentation"
            onClick={() => setActiveTable("allCategoriesTable")}
          >
            <span
              className={
                "cursor-pointer nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 parent hover:bg-primary-200 transition duration-300 rounded-t " +
                (activeTable == "allCategoriesTable" &&
                  "text-primary-500 bg-primary-100")
              }
              id="tabs-all-categories-table"
              data-bs-toggle="pill"
              data-bs-target="#tabs-all-categories"
              role="tab"
              aria-controls="tabs-all-categories"
              aria-selected="true"
            >
              All Categories
            </span>
          </li>
        </ul>

        <div className="flex flex-col items-end gap-y-4">
          <div className="font-semibold text-base text-dark-700">
            Total Count: {categoriesCount}
          </div>
          <div
            onClick={() => setAddCategoryModalOpen(true)}
            className="text-sm hover:text-primary-500 transition duration-300 cursor-pointer"
          >
            <i className="fa-solid fa-circle-plus"></i> Create a new category
          </div>
        </div>
      </div>

      <div className="tab-content" id="tabs-tabContent3">
        {/* All Categories Table */}
        {activeTable == "allCategoriesTable" && (
          <div
            className="tab-pane fade show active"
            id="tabs-all-categories"
            role="tabpanel"
            aria-labelledby="tabs-all-categories-details"
          >
            {categories.length !== 0 ? (
              <table className="w-full table allCategories-table table-auto text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-dark-800">
                  <tr>
                    <th className="p-3 text-left pl-6 text-light-200">
                      Created At (UTC)
                    </th>
                    <th className="p-3 text-left text-light-200">ID</th>
                    <th className="p-3 text-left text-light-200">Image</th>
                    <th className="p-3 text-left text-light-200">Name</th>
                    <th className="p-3 text-left text-light-200">Edit</th>
                    <th className="p-3 text-left text-light-200">Delete</th>
                  </tr>
                </thead>

                <tbody className="text-gray-900">
                  {categories.map((category, index) => (
                    <tr className="bg-light-100 text-dark-700" key={index}>
                      <td className="p-3">
                        <span className="flex align-items-center">
                          <span className="ml-3">
                            <span className="">
                              {getTimestamp(category.createdAt).slice(0, 19)}
                            </span>
                          </span>
                        </span>
                      </td>
                      <td className="p-3">
                        <span data-info={category._id}>{category._id}</span>
                      </td>
                      <td className="p-3">
                        {category.image ? (
                          <Image
                            src={category.image}
                            alt={category.name}
                            width={80}
                            height={45}
                            className="rounded"
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="p-3">{category.name}</td>
                      <td
                        className="p-3 bg-primary-600 hover:bg-primary-800 transition duration-300 text-light-100 cursor-pointer text-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setCategoryToUpdate(category);
                          setUpdateCategoryModalOpen(true);
                        }}
                      >
                        Edit
                      </td>
                      <td
                        className="p-3 bg-error-600 hover:bg-error-700 transition duration-300 text-light-100 cursor-pointer text-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setCategoryToDelete(category);
                          setDeleteCategoryModalOpen(true);
                        }}
                      >
                        Delete
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <table className="w-full table allCategories-table table-auto text-gray-400 border-separate space-y-6 text-sm">
                  <thead className="bg-zinc-900 text-zinc-50">
                    <tr>
                      <th className="p-3">Created At (UTC)</th>
                      <th className="p-3 text-left">ID</th>
                      <th className="p-3 text-left">Image</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">Edit</th>
                      <th className="p-3 text-left">Delete</th>
                    </tr>
                  </thead>
                </table>

                <NoDataTableRow />
              </>
            )}
          </div>
        )}
      </div>

      <AddCategoryModal
        isOpen={isAddCategoryModalOpen}
        setOpen={setAddCategoryModalOpen}
      />
      <UpdateCategoryModal
        isOpen={isUpdateCategoryModalOpen}
        setOpen={setUpdateCategoryModalOpen}
        categoryToUpdate={categoryToUpdate}
      />
      <DeleteCategoryConfirmModal
        isOpen={isDeleteCategoryModalOpen}
        setOpen={setDeleteCategoryModalOpen}
        categoryToDelete={categoryToDelete}
      />
    </div>
  ) : (
    <div className="mt-20 text-light-500">No categories yet</div>
  );
}
