import PropTypes from 'prop-types'

const PDFViewer = ({ pdfPath, title, downloadText = "Download PDF" }) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft dark:bg-[#172430]">
      <div className="aspect-[4/3] w-full">
        <iframe
          src={pdfPath}
          className="h-full w-full rounded-lg border-0"
          title={title}
        />
      </div>
      <div className="mt-4 flex justify-center">
        <a
          href={pdfPath}
          download
          className="rounded-full bg-moss px-6 py-3 text-sm font-semibold text-white hover:bg-moss/90"
        >
          {downloadText}
        </a>
      </div>
    </div>
  )
}

PDFViewer.propTypes = {
  pdfPath: PropTypes.string.isRequired,
  title: PropTypes.string,
  downloadText: PropTypes.string,
}

export default PDFViewer