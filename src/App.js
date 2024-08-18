import { useState } from "react";
import BookCard from "./components/BookCard";
import { toast } from "react-toastify";
import EditModal from "./components/EditModal";
function App() {
  const [bookName, setBookName] = useState("");
  console.log(bookName);
  const [books, setBooks] = useState([]);

  const [showConfirm, setShowConfirm] = useState(false);
  //hangi elemanı editleyeceksek onları da state te tut:
  const [deleteId, setDeleteId] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  //hangi elemanı editleyeceksek onları da state te tut:

  //! ekle butonuna tıklandığı anda çalışır:
  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookName === "") {
      toast.warn("Please, enter the book title...", { autoClose: 2000 });

      return;
    }

    // Kitap için gerekli bilgilere sahip obje oluşturma
    const newBook = {
      id: new Date().getTime(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };
    //oluşturulan kitap objesini kitaplar dizisine aktar.
    //SPREAD OPERATOR : önceden eklenenleri muhafaza eder
    setBooks([...books, newBook]);
    setBookName("");
    toast.success("Book added.", { autoClose: 1000 });
  };

  //modalı aç kapa:

  const handleModal = (id) => {
    //id yi state e aktarma
    setDeleteId(id);
    //modal ı açma
    setShowConfirm(true);
  };

  //! sil butonuna bastığında çalışır.
  const handleDelete = (deletedId) => {
    //silinecek "id" ye eşit olmayanlari al ve bir diziye aktar:
    const filtered = books.filter((item) => item.id !== deletedId);

    // Oluşan diziyi bir state a aktar:
    setBooks(filtered);
    //Bildirim ver:

    toast.error("Book deleted.", { autoClose: 2000 });
  };

  //! Okundu butonuna bastığında çalışır.
  const handleRead = (book) => {
    //okundu değerini tersine çevir
    //books dizisinin bir kopyasını oluştur.
    //düzenlenecek olan kitabın dizideki sırasını bul
    //eski kitabı kopya  diziden çıkart yerine güncellenmiş versiyonunu koy > slice
    //güncel olan kopya diziyi state a aktar.

    const cloneBooks = [...books];
    const upDatedBook = { ...book, isRead: !book.isRead };
    const index = cloneBooks.findIndex((item) => item.id === book.id);

    cloneBooks.splice(index, 1, upDatedBook);
    setBooks(cloneBooks);
  };

  //kitabı günceller:
  const handleEditBook = () => {
    //değişecek elemanın dizideki sırasını bulmak için:
    const index = books.findIndex((book) => book.id === editItem.id);
    //books dizisinin klonunu oluşturma:
    const cloneBooks = [...books];

    //eski kitabı diziden çıkar yerine yenisini koy:
    cloneBooks.splice(index, 1, editItem);

    // state i güncelle> kopya diziyi state a aktar:

    setBooks(cloneBooks);

    //modalı kapat:
    setShowEditModal(false);
  };

  return (
    <div>
      <div className="bg-warning text-dark px-5 py-4 fs-4  display-1 text-center fw-medium fw-bold ">
        {/* header */}
        BOOKWORM
      </div>
      <div className="container border mt-3">
        {/* form */}
        <form onSubmit={handleSubmit} className="d-flex gap-4 mt-4">
          <input
            onChange={(e) => {
              setBookName(e.target.value);
            }}
            value={bookName}
            className="form-control shadow "
            type="text"
          />
          <button className="btn btn-warning shadow">Add</button>
        </form>
        <div className="d-flex flex-column gap-3 py-4">
          {/* Eğer state içeriği boşsa ekrana bunu yaz */}
          {books.length === 0 && (
            <h4 className="fs-5">No book has been added yet...</h4>
          )}
          {/* Eğer state içerisinde eleman varsa onları listele  */}
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleModal={handleModal}
              handleRead={handleRead}
              setShowEditModal={setShowEditModal}
              setEditItem={setEditItem}
            />
          ))}
        </div>
      </div>
      {/* modalı tanımlama */}
      {showConfirm && (
        <div className="confirm-modal">
          <div className="modal-inner shadow">
            <h5>Do you want to delete?</h5>
            <button
              className="btn btn-warning"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(deleteId);
                setShowConfirm(false);
              }}
            >
              Confirm{" "}
            </button>
          </div>
        </div>
      )}
      {/* Edit modal */}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          setEditItem={setEditItem}
          editItem={editItem}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
