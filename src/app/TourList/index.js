import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Helmet } from "react-helmet";
import API from "../../config/APINoToken";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowRight,
  FaBus,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaRegClock,
  FaSearch,
  FaSortAmountDown,
  FaTimes,
} from "react-icons/fa";

import "./index.css";

const TOURS_PER_PAGE = 16;

const TourList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tourSectionRef = useRef(null);

  /* =====================================================
     DATA
  ===================================================== */

  const [dataTourList, setDataTourList] =
    useState([]);

  const [options, setOptions] = useState({
    destinations: [],
    departures: [],
    timeTypes: [],
    hotelTypes: [],
    vehicleTypes: [],
  });

  /* =====================================================
     FILTER
  ===================================================== */

  const [filters, setFilters] = useState({
    tourtype: [],
    timetypeid: [],
    hoteltypeid: [],
    vehicletypeid: [],
    selectedFrom: "",
    selectedDestination: "",
  });

  const [
    showAdvancedFilter,
    setShowAdvancedFilter,
  ] = useState(false);

  /* =====================================================
     SEARCH
  ===================================================== */

  const [searchText, setSearchText] =
    useState("");

  const [
    appliedSearchText,
    setAppliedSearchText,
  ] = useState("");

  /* =====================================================
     PAGE
  ===================================================== */

  const [sortType, setSortType] =
    useState("NEWEST");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [loadingTours, setLoadingTours] =
    useState(true);

  /* =====================================================
     FILTER TỪ PAGE KHÁC
  ===================================================== */

  useEffect(() => {
    const state = location.state || {};

    const initialTourtype =
      state.tourtype;

    const initialDestination =
      state.destinationid;

    let newTourType = [];

    if (
      Array.isArray(initialTourtype)
    ) {
      newTourType =
        initialTourtype;
    } else if (
      typeof initialTourtype ===
        "string" &&
      initialTourtype
    ) {
      newTourType = [
        initialTourtype,
      ];
    }

    setFilters((prev) => ({
      ...prev,

      tourtype: newTourType,

      selectedDestination:
        initialDestination || "",
    }));

    setCurrentPage(1);

    window.scrollTo(0, 0);
  }, [location.state]);

  /* =====================================================
     GET OPTIONS
  ===================================================== */

  useEffect(() => {
    const getOptions = async () => {
      try {
        const result =
          await Promise.all([
            API.get("/province/get"),
            API.get("/timeType/get"),
            API.get(
              "/hotelType/get"
            ),
            API.get(
              "/vehicleType/get"
            ),
            API.get(
              "/travelLocation/get"
            ),
          ]);

        const dep = result[0];
        const time = result[1];
        const hotel = result[2];
        const vehicle =
          result[3];
        const destination =
          result[4];

        setOptions({
          departures:
            dep &&
            dep.data &&
            dep.data.data
              ? dep.data.data
              : [],

          timeTypes:
            time &&
            time.data &&
            time.data.data
              ? time.data.data
              : [],

          hotelTypes:
            hotel &&
            hotel.data &&
            hotel.data.data
              ? hotel.data.data
              : [],

          vehicleTypes:
            vehicle &&
            vehicle.data &&
            vehicle.data.data
              ? vehicle.data.data
              : [],

          destinations:
            destination &&
            destination.data &&
            destination.data.data
              ? destination.data.data
              : [],
        });
      } catch (error) {
        console.error(
          "Lỗi lấy dữ liệu bộ lọc:",
          error
        );
      }
    };

    getOptions();
  }, []);

  /* =====================================================
     GET TOUR
  ===================================================== */

  useEffect(() => {
    const getTours = async () => {
      try {
        setLoadingTours(true);

        const payload = {};

        if (
          filters.tourtype.length >
          0
        ) {
          payload.tourtype =
            filters.tourtype;
        }

        if (
          filters.timetypeid.length >
          0
        ) {
          payload.timetypeid =
            filters.timetypeid;
        }

        if (
          filters.hoteltypeid.length >
          0
        ) {
          payload.hoteltypeid =
            filters.hoteltypeid;
        }

        if (
          filters.vehicletypeid
            .length > 0
        ) {
          payload.vehicletypeid =
            filters.vehicletypeid;
        }

        if (
          filters.selectedFrom
        ) {
          payload.departure =
            filters.selectedFrom;
        }

        if (
          filters.selectedDestination
        ) {
          payload.destination =
            filters.selectedDestination;
        }

        const response =
          await API.post(
            "/tour/search",
            payload
          );

        const tours =
          response &&
          response.data &&
          response.data.data
            ? response.data.data
            : [];

        setDataTourList(tours);

        setCurrentPage(1);
      } catch (error) {
        console.error(
          "Lỗi lấy danh sách tour:",
          error
        );

        setDataTourList([]);
      } finally {
        setLoadingTours(false);
      }
    };

    getTours();
  }, [
    filters.tourtype,
    filters.timetypeid,
    filters.hoteltypeid,
    filters.vehicletypeid,
    filters.selectedFrom,
    filters.selectedDestination,
  ]);

  /* =====================================================
     NORMALIZE VIETNAMESE
  ===================================================== */

  const normalizeText = (text) => {
    if (!text) {
      return "";
    }

    return text
      .toString()
      .normalize("NFD")
      .replace(
        /[\u0300-\u036f]/g,
        ""
      )
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim();
  };

  /* =====================================================
     CHECKBOX / CHIP
  ===================================================== */

  const handleCheckboxChange = (
    key,
    value
  ) => {
    setFilters((prev) => {
      const current =
        prev[key] || [];

      const exists =
        current.indexOf(value) !== -1;

      const next = exists
        ? current.filter(
            (item) =>
              item !== value
          )
        : current.concat(value);

      return {
        ...prev,

        [key]: next,
      };
    });

    setCurrentPage(1);
  };

  /* =====================================================
     CLEAR FILTER
  ===================================================== */

  const clearFilters = () => {
    setFilters({
      tourtype: [],
      timetypeid: [],
      hoteltypeid: [],
      vehicletypeid: [],
      selectedFrom: "",
      selectedDestination: "",
    });

    setSearchText("");

    setAppliedSearchText("");

    setSortType("NEWEST");

    setCurrentPage(1);
  };

  /* =====================================================
     FILTER COUNT
  ===================================================== */

  const advancedFilterCount =
    filters.timetypeid.length +
    filters.hoteltypeid.length +
    filters.vehicletypeid.length;

  const activeFilterCount =
    filters.tourtype.length +
    filters.timetypeid.length +
    filters.hoteltypeid.length +
    filters.vehicletypeid.length +
    (filters.selectedFrom
      ? 1
      : 0) +
    (filters.selectedDestination
      ? 1
      : 0);

  /* =====================================================
     SORT
  ===================================================== */

  const sortedTours = useMemo(
    () => {
      const tours =
        dataTourList.slice();

      if (
        sortType ===
        "PRICE_ASC"
      ) {
        tours.sort((a, b) => {
          const priceA =
            a &&
            a.price &&
            a.price.adultprice
              ? Number(
                  a.price
                    .adultprice
                )
              : 0;

          const priceB =
            b &&
            b.price &&
            b.price.adultprice
              ? Number(
                  b.price
                    .adultprice
                )
              : 0;

          return priceA - priceB;
        });
      } else if (
        sortType ===
        "PRICE_DESC"
      ) {
        tours.sort((a, b) => {
          const priceA =
            a &&
            a.price &&
            a.price.adultprice
              ? Number(
                  a.price
                    .adultprice
                )
              : 0;

          const priceB =
            b &&
            b.price &&
            b.price.adultprice
              ? Number(
                  b.price
                    .adultprice
                )
              : 0;

          return priceB - priceA;
        });
      } else {
        tours.sort((a, b) => {
          const idA =
            a && a.tourid
              ? Number(
                  a.tourid
                )
              : 0;

          const idB =
            b && b.tourid
              ? Number(
                  b.tourid
                )
              : 0;

          return idB - idA;
        });
      }

      return tours;
    },
    [dataTourList, sortType]
  );

  /* =====================================================
     SEARCH THEO TITLE
  ===================================================== */

  const searchedTours =
    useMemo(() => {
      if (!appliedSearchText) {
        return sortedTours;
      }

      const keyword =
        normalizeText(
          appliedSearchText
        );

      return sortedTours.filter(
        (tour) => {
          const tourName =
            tour &&
            tour.tourname
              ? normalizeText(
                  tour.tourname
                )
              : "";

          return (
            tourName.indexOf(
              keyword
            ) !== -1
          );
        }
      );
    }, [
      sortedTours,
      appliedSearchText,
    ]);

  /* =====================================================
     SEARCH
  ===================================================== */

  const handleSearchTour = () => {
    setAppliedSearchText(
      searchText.trim()
    );

    setCurrentPage(1);

    setTimeout(() => {
      if (
        tourSectionRef.current
      ) {
        tourSectionRef.current.scrollIntoView(
          {
            behavior: "smooth",
            block: "start",
          }
        );
      }
    }, 50);
  };

  const clearSearch = () => {
    setSearchText("");

    setAppliedSearchText("");

    setCurrentPage(1);
  };

  /* =====================================================
     PAGINATION
  ===================================================== */

  const totalPages =
    Math.ceil(
      searchedTours.length /
        TOURS_PER_PAGE
    );

  const indexOfLast =
    currentPage *
    TOURS_PER_PAGE;

  const indexOfFirst =
    indexOfLast -
    TOURS_PER_PAGE;

  const currentTours =
    useMemo(() => {
      return searchedTours.slice(
        indexOfFirst,
        indexOfLast
      );
    }, [
      searchedTours,
      indexOfFirst,
      indexOfLast,
    ]);

  const paginate = (page) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    setTimeout(() => {
      if (
        tourSectionRef.current
      ) {
        tourSectionRef.current.scrollIntoView(
          {
            behavior: "smooth",
            block: "start",
          }
        );
      }
    }, 50);
  };

  const getPaginationGroup =
    () => {
      if (totalPages <= 5) {
        return Array.from(
          {
            length:
              totalPages,
          },
          (_, index) =>
            index + 1
        );
      }

      const pages = [1];

      if (currentPage > 3) {
        pages.push(
          "left-dots"
        );
      }

      const startPage =
        Math.max(
          2,
          currentPage - 1
        );

      const endPage =
        Math.min(
          totalPages - 1,
          currentPage + 1
        );

      for (
        let page =
          startPage;
        page <= endPage;
        page += 1
      ) {
        pages.push(page);
      }

      if (
        currentPage <
        totalPages - 2
      ) {
        pages.push(
          "right-dots"
        );
      }

      if (totalPages > 1) {
        pages.push(
          totalPages
        );
      }

      return pages;
    };

  /* =====================================================
     DETAIL
  ===================================================== */

  const goToTour = (tour) => {
    if (
      !tour ||
      !tour.slug
    ) {
      return;
    }

    navigate(
      "/tour/" +
        tour.slug
    );
  };

  const handleCardKeyDown = (
    event,
    tour
  ) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();

      goToTour(tour);
    }
  };

  return (
    <main className="tour-list-page">
      <Helmet>
        <title>
          Tour du lịch trong nước |
          Việt Nam Tour
        </title>

        <meta
          name="description"
          content="Khám phá tour du lịch trong nước, tour đoàn doanh nghiệp, MICE và các hành trình nghỉ dưỡng do Việt Nam Tour tổ chức."
        />

        <link
          rel="canonical"
          href="https://myvietnamtour.vn/danh-sach-tour"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Việt Nam Tour"
        />

        <meta
          property="og:title"
          content="Tour du lịch trong nước | Việt Nam Tour"
        />

        <meta
          property="og:description"
          content="Khám phá các hành trình tour trong nước, tour đoàn, MICE và nghỉ dưỡng cùng Việt Nam Tour."
        />

        <meta
          property="og:url"
          content="https://myvietnamtour.vn/danh-sach-tour"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
      </Helmet>

      {/* =================================================
          HERO
      ================================================= */}

      <section className="tour-hero-compact">
        <div className="tour-container">
          <div className="tour-hero-content">
            <span className="tour-hero-kicker">
              TOUR DU LỊCH VIỆT NAM
            </span>

            <h1>
              Chọn hành trình
              <span>
                {" "}
                phù hợp với bạn.
              </span>
            </h1>

            <p>
              Tour trong nước, tour
              đoàn doanh nghiệp,
              MICE và những hành
              trình được Việt Nam
              Tour chọn lọc.
            </p>

            {/* SEARCH TITLE */}

            <div className="tour-title-search">
              <div className="tour-title-search-input">
                <FaSearch />

                <input
                  type="text"
                  value={
                    searchText
                  }
                  placeholder="Tìm tour: Mũi Né, Đà Lạt, Nha Trang..."
                  onChange={(
                    event
                  ) => {
                    setSearchText(
                      event.target
                        .value
                    );
                  }}
                  onKeyDown={(
                    event
                  ) => {
                    if (
                      event.key ===
                      "Enter"
                    ) {
                      handleSearchTour();
                    }
                  }}
                />

                {searchText && (
                  <button
                    type="button"
                    className="tour-title-search-clear"
                    onClick={
                      clearSearch
                    }
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <button
                type="button"
                className="tour-title-search-btn"
                onClick={
                  handleSearchTour
                }
              >
                <FaSearch />

                <span>
                  Tìm tour
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="tour-main">
        <div className="tour-container">
          {/* =============================================
              QUICK FILTER: FROM / DESTINATION
          ============================================= */}

          <div className="tour-quick-filter">
            <div className="tour-quick-select">
              <FaMapMarkerAlt />

              <div>
                <small>
                  KHỞI HÀNH
                </small>

                <select
                  value={
                    filters.selectedFrom
                  }
                  onChange={(
                    event
                  ) => {
                    setFilters(
                      (prev) => ({
                        ...prev,

                        selectedFrom:
                          event.target
                            .value,
                      })
                    );

                    setCurrentPage(
                      1
                    );
                  }}
                >
                  <option value="">
                    Tất cả điểm
                    khởi hành
                  </option>

                  {options.departures.map(
                    (item) => (
                      <option
                        key={
                          item.provinceid
                        }
                        value={
                          item.provinceid
                        }
                      >
                        {
                          item.provincename
                        }
                      </option>
                    )
                  )}
                </select>
              </div>

              <FaChevronDown className="tour-quick-arrow" />
            </div>

            <div className="tour-quick-select">
              <FaMapMarkerAlt />

              <div>
                <small>
                  ĐIỂM ĐẾN
                </small>

                <select
                  value={
                    filters.selectedDestination
                  }
                  onChange={(
                    event
                  ) => {
                    setFilters(
                      (prev) => ({
                        ...prev,

                        selectedDestination:
                          event.target
                            .value,
                      })
                    );

                    setCurrentPage(
                      1
                    );
                  }}
                >
                  <option value="">
                    Tất cả điểm đến
                  </option>

                  {options.destinations.map(
                    (item) => (
                      <option
                        key={
                          item.travellocationid
                        }
                        value={
                          item.travellocationid
                        }
                      >
                        {
                          item.travellocationname
                        }
                      </option>
                    )
                  )}
                </select>
              </div>

              <FaChevronDown className="tour-quick-arrow" />
            </div>
          </div>

          {/* =============================================
              MAIN FILTER BAR
          ============================================= */}

          <div className="tour-filter-bar">
            <div className="tour-filter-bar-scroll">
              {/* ALL */}

              <button
                type="button"
                className={
                  "tour-main-chip " +
                  (filters.tourtype
                    .length === 0
                    ? "active"
                    : "")
                }
                onClick={() => {
                  setFilters(
                    (prev) => ({
                      ...prev,

                      tourtype: [],
                    })
                  );

                  setCurrentPage(
                    1
                  );
                }}
              >
                Tất cả tour
              </button>

              {/* TOUR DOAN */}

              <button
                type="button"
                className={
                  "tour-main-chip " +
                  (filters.tourtype.indexOf(
                    "DOAN"
                  ) !== -1
                    ? "active"
                    : "")
                }
                onClick={() =>
                  handleCheckboxChange(
                    "tourtype",
                    "DOAN"
                  )
                }
              >
                Tour đoàn
              </button>

              {/* ADVANCED FILTER BUTTON */}

              <button
                type="button"
                className={
                  "tour-filter-toggle " +
                  (showAdvancedFilter
                    ? "active"
                    : "")
                }
                onClick={() =>
                  setShowAdvancedFilter(
                    !showAdvancedFilter
                  )
                }
              >
                <FaFilter />

                <span>
                  Bộ lọc
                </span>

                {advancedFilterCount >
                  0 && (
                  <strong>
                    {
                      advancedFilterCount
                    }
                  </strong>
                )}

                <FaChevronDown
                  className={
                    showAdvancedFilter
                      ? "filter-chevron open"
                      : "filter-chevron"
                  }
                />
              </button>
            </div>

            {/* SORT */}

            <div className="tour-sort">
              <FaSortAmountDown />

              <select
                value={sortType}
                onChange={(
                  event
                ) => {
                  setSortType(
                    event.target
                      .value
                  );

                  setCurrentPage(
                    1
                  );
                }}
              >
                <option value="NEWEST">
                  Mới nhất
                </option>

                <option value="PRICE_ASC">
                  Giá thấp đến cao
                </option>

                <option value="PRICE_DESC">
                  Giá cao đến thấp
                </option>
              </select>
            </div>
          </div>

          {/* =============================================
              ADVANCED FILTER EXPAND
          ============================================= */}

          {showAdvancedFilter && (
            <div className="tour-advanced-filter">
              {/* TIME */}

              {options.timeTypes
                .length > 0 && (
                <div className="tour-filter-row">
                  <div className="tour-filter-row-title">
                    Thời gian
                  </div>

                  <div className="tour-filter-row-content">
                    {options.timeTypes.map(
                      (item) => (
                        <button
                          type="button"
                          key={
                            item.timetypeid
                          }
                          className={
                            "tour-filter-option " +
                            (filters.timetypeid.indexOf(
                              item.timetypeid
                            ) !== -1
                              ? "active"
                              : "")
                          }
                          onClick={() =>
                            handleCheckboxChange(
                              "timetypeid",
                              item.timetypeid
                            )
                          }
                        >
                          {
                            item.timetypename
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* HOTEL */}

              {options.hotelTypes
                .length > 0 && (
                <div className="tour-filter-row">
                  <div className="tour-filter-row-title">
                    Khách sạn
                  </div>

                  <div className="tour-filter-row-content">
                    {options.hotelTypes.map(
                      (item) => (
                        <button
                          type="button"
                          key={
                            item.hoteltypeid
                          }
                          className={
                            "tour-filter-option " +
                            (filters.hoteltypeid.indexOf(
                              item.hoteltypeid
                            ) !== -1
                              ? "active"
                              : "")
                          }
                          onClick={() =>
                            handleCheckboxChange(
                              "hoteltypeid",
                              item.hoteltypeid
                            )
                          }
                        >
                          {
                            item.hoteltypename
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* VEHICLE */}

              {options.vehicleTypes
                .length > 0 && (
                <div className="tour-filter-row">
                  <div className="tour-filter-row-title">
                    Phương tiện
                  </div>

                  <div className="tour-filter-row-content">
                    {options.vehicleTypes.map(
                      (item) => (
                        <button
                          type="button"
                          key={
                            item.vehicletypeid
                          }
                          className={
                            "tour-filter-option " +
                            (filters.vehicletypeid.indexOf(
                              item.vehicletypeid
                            ) !== -1
                              ? "active"
                              : "")
                          }
                          onClick={() =>
                            handleCheckboxChange(
                              "vehicletypeid",
                              item.vehicletypeid
                            )
                          }
                        >
                          {
                            item.vehicletypename
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* ADVANCED FOOTER */}

              <div className="tour-advanced-footer">
                <button
                  type="button"
                  className="tour-clear-filter"
                  onClick={
                    clearFilters
                  }
                >
                  Xóa tất cả bộ lọc

                  {activeFilterCount >
                    0 && (
                    <span>
                      (
                      {
                        activeFilterCount
                      }
                      )
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  className="tour-collapse-filter"
                  onClick={() =>
                    setShowAdvancedFilter(
                      false
                    )
                  }
                >
                  Thu gọn

                  <FaChevronDown />
                </button>
              </div>
            </div>
          )}

          {/* =============================================
              TOUR CONTENT
          ============================================= */}

          <div
            className="tour-content"
            ref={tourSectionRef}
          >
            <div className="tour-content-heading">
              <div>
                <span className="tour-section-eyebrow">
                  TOUR DU LỊCH
                </span>

                <h2>
                  Chọn hành trình của
                  bạn
                </h2>

                {appliedSearchText && (
                  <div className="tour-search-result-text">
                    Kết quả cho:{" "}
                    <strong>
                      “
                      {
                        appliedSearchText
                      }
                      ”
                    </strong>
                  </div>
                )}
              </div>

              {!loadingTours && (
                <p className="tour-result-count">
                  {
                    searchedTours.length
                  }{" "}
                  tour
                </p>
              )}
            </div>

            {/* =============================================
                LOADING
            ============================================= */}

            {loadingTours && (
              <div className="tour-grid">
                {Array.from({
                  length: 8,
                }).map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      className="tour-card-skeleton"
                      key={
                        index
                      }
                    >
                      <div className="tour-skeleton-image" />

                      <div className="tour-skeleton-body">
                        <div className="tour-skeleton-line skeleton-small" />

                        <div className="tour-skeleton-line skeleton-title" />

                        <div className="tour-skeleton-line skeleton-title-short" />

                        <div className="tour-skeleton-line skeleton-info" />

                        <div className="tour-skeleton-line skeleton-price" />
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {/* =============================================
                TOUR LIST
            ============================================= */}

            {!loadingTours &&
              currentTours.length >
                0 && (
                <div className="tour-grid">
                  {currentTours.map(
                    (tour) => {
                      const imageUrl =
                        tour &&
                        tour.images &&
                        tour.images
                          .length >
                          0 &&
                        tour.images[0]
                          .imageurl
                          ? tour
                              .images[0]
                              .imageurl
                          : "";

                      const adultPrice =
                        tour &&
                        tour.price &&
                        tour.price
                          .adultprice
                          ? Number(
                              tour
                                .price
                                .adultprice
                            )
                          : 0;

                      return (
                        <article
                          className="tour-card"
                          key={
                            tour.tourid
                          }
                          role="link"
                          tabIndex={
                            0
                          }
                          onClick={() =>
                            goToTour(
                              tour
                            )
                          }
                          onKeyDown={(
                            event
                          ) =>
                            handleCardKeyDown(
                              event,
                              tour
                            )
                          }
                        >
                          {/* IMAGE */}

                          <div className="tour-card-image">
                            {imageUrl ? (
                              <img
                                src={
                                  imageUrl
                                }
                                alt={
                                  tour.tourname ||
                                  "Tour du lịch Việt Nam Tour"
                                }
                                loading="lazy"
                              />
                            ) : (
                              <div className="tour-image-empty">
                                Việt Nam
                                Tour
                              </div>
                            )}

                            <div className="tour-card-overlay" />

                            <span className="tour-card-type">
                              {tour.tourtype ===
                              "DOAN"
                                ? "TOUR ĐOÀN"
                                : "TOUR DU LỊCH"}
                            </span>

                            {tour.destination_name && (
                              <div className="tour-card-destination">
                                <FaMapMarkerAlt />

                                <span>
                                  {
                                    tour.destination_name
                                  }
                                </span>
                              </div>
                            )}
                          </div>

                          {/* BODY */}

                          <div className="tour-card-body">
                            <h3>
                              {
                                tour.tourname
                              }
                            </h3>

                            <div className="tour-card-info">
                              {tour.timetype_name && (
                                <span>
                                  <FaRegClock />

                                  {
                                    tour.timetype_name
                                  }
                                </span>
                              )}

                              {tour.hoteltypename && (
                                <span>
                                  <FaRegBuilding />

                                  {
                                    tour.hoteltypename
                                  }
                                </span>
                              )}

                              {tour.vehicletype_name && (
                                <span>
                                  <FaBus />

                                  {
                                    tour.vehicletype_name
                                  }
                                </span>
                              )}
                            </div>

                            <div className="tour-card-main-info">
                              <div className="tour-card-departure">
                                <small>
                                  Khởi
                                  hành
                                </small>

                                <strong>
                                  {tour.departure_name ||
                                    "TP.HCM"}
                                </strong>
                              </div>

                              <div className="tour-card-price">
                                <small>
                                  Giá
                                  từ
                                </small>

                                <strong>
                                  {adultPrice >
                                  0
                                    ? adultPrice.toLocaleString(
                                        "vi-VN"
                                      ) +
                                      " ₫"
                                    : "Liên hệ"}
                                </strong>
                              </div>
                            </div>

                            <div className="tour-card-footer">
                              <span>
                                Xem chi
                                tiết tour
                              </span>

                              <FaArrowRight />
                            </div>
                          </div>
                        </article>
                      );
                    }
                  )}
                </div>
              )}

            {/* =============================================
                EMPTY
            ============================================= */}

            {!loadingTours &&
              currentTours.length ===
                0 && (
                <div className="tour-empty">
                  <div className="tour-empty-icon">
                    <FaSearch />
                  </div>

                  <h3>
                    Chưa tìm thấy tour
                    phù hợp
                  </h3>

                  <p>
                    Thử nhập từ khóa
                    khác hoặc thay đổi
                    bộ lọc để tìm thêm
                    hành trình.
                  </p>

                  <button
                    type="button"
                    onClick={
                      clearFilters
                    }
                  >
                    Xem tất cả tour
                  </button>
                </div>
              )}

            {/* =============================================
                PAGINATION
            ============================================= */}

            {!loadingTours &&
              totalPages > 1 && (
                <nav
                  className="tour-pagination"
                  aria-label="Phân trang tour"
                >
                  <button
                    type="button"
                    className="tour-pagination-arrow"
                    disabled={
                      currentPage ===
                      1
                    }
                    onClick={() =>
                      paginate(
                        currentPage -
                          1
                      )
                    }
                  >
                    <FaChevronLeft />
                  </button>

                  <div className="tour-pagination-numbers">
                    {getPaginationGroup().map(
                      (item) => {
                        if (
                          item ===
                            "left-dots" ||
                          item ===
                            "right-dots"
                        ) {
                          return (
                            <span
                              className="tour-pagination-dots"
                              key={
                                item
                              }
                            >
                              ...
                            </span>
                          );
                        }

                        return (
                          <button
                            type="button"
                            key={
                              item
                            }
                            className={
                              "tour-pagination-number " +
                              (currentPage ===
                              item
                                ? "active"
                                : "")
                            }
                            onClick={() =>
                              paginate(
                                item
                              )
                            }
                          >
                            {
                              item
                            }
                          </button>
                        );
                      }
                    )}
                  </div>

                  <button
                    type="button"
                    className="tour-pagination-arrow"
                    disabled={
                      currentPage ===
                      totalPages
                    }
                    onClick={() =>
                      paginate(
                        currentPage +
                          1
                      )
                    }
                  >
                    <FaChevronRight />
                  </button>
                </nav>
              )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourList;