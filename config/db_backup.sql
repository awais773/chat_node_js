--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO chandjr;

--
-- Name: bookings; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    patient jsonb,
    therapist jsonb,
    address character varying(255),
    "addressType" character varying(255),
    "serviceType" character varying(255),
    latitude double precision,
    "expiryTime" character varying(255),
    "scheduleTime" character varying(255),
    "uploadStatus" character varying(255),
    longitude double precision,
    "therapistId" integer,
    "patientId" integer,
    "startTime" character varying(255),
    "endTime" character varying(255),
    date character varying(255)
);


ALTER TABLE public.bookings OWNER TO chandjr;

--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookings_id_seq OWNER TO chandjr;

--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- Name: documents; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public.documents (
    id integer NOT NULL,
    url character varying(255)[],
    "checkInTime" character varying(255),
    "checkOutTime" character varying(255),
    type character varying(255),
    address character varying(255),
    "addressType" character varying(255),
    therapistid character varying(255),
    userid character varying(255),
    "bookingId" character varying(255),
    feedback character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.documents OWNER TO chandjr;

--
-- Name: documents_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public.documents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documents_id_seq OWNER TO chandjr;

--
-- Name: documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public.documents_id_seq OWNED BY public.documents.id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    "firstName" character varying(255),
    "middleName" character varying(255),
    "lastName" character varying(255),
    name character varying(255),
    address character varying(255),
    type character varying(255),
    latitude double precision,
    longitude double precision,
    expirytime character varying(255),
    scheduletime character varying(255),
    uploadstatus character varying(255),
    "addressType" character varying(255),
    "careDate" character varying(255),
    "certificationPeriod" character varying(255)[],
    "serviceType" character varying(255)[],
    gender character varying(255),
    zip character varying(255),
    city character varying(255),
    country character varying(255),
    state character varying(255),
    "phoneNo" character varying(255),
    "phoneP_Two" character varying(255),
    "address_Two" character varying(255),
    "addressType_Two" character varying(255),
    "country_Two" character varying(255),
    "state_Two" character varying(255),
    "city_Two" character varying(255),
    "zip_Two" character varying(255),
    "applicationId" character varying(255),
    "DOB" character varying(255),
    "phone_One" character varying(255),
    "phone_Two" character varying(255),
    "phone_Three" character varying(255),
    relation character varying(255),
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "latitude_Two" double precision,
    "longitude_Two" double precision
);


ALTER TABLE public.patients OWNER TO chandjr;

--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patients_id_seq OWNER TO chandjr;

--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: therapists; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public.therapists (
    id integer NOT NULL,
    "firstName" character varying(255),
    "middleName" character varying(255),
    "lastName" character varying(255),
    "fullName" character varying(255),
    "serviceType" character varying(255),
    gender character varying(255),
    "DOB" character varying(255),
    "ssnNo" character varying(255),
    "hireDate" character varying(255),
    status character varying(255),
    address character varying(255),
    street character varying(255),
    zip character varying(255),
    city character varying(255),
    state character varying(255),
    country character varying(255),
    "homePhoneNo" character varying(255),
    "emgName" character varying(255),
    "emgEmail" character varying(255),
    relationship character varying(255),
    "phoneNo" character varying(255),
    "phone_One" character varying(255),
    "phone_Two" character varying(255),
    "accountEmail" character varying(255),
    password character varying(255),
    "ProfessionalLicenseNo" character varying(255),
    "LicenseDate" character varying(255),
    "ExpDate" character varying(255),
    "proExpDate" character varying(255),
    "annualExpDate" character varying(255),
    "annualSelfExpDate" character varying(255),
    "annualFieldExpDate" character varying(255),
    "annualtrainExpDate" character varying(255),
    document character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.therapists OWNER TO chandjr;

--
-- Name: therapists_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public.therapists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.therapists_id_seq OWNER TO chandjr;

--
-- Name: therapists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public.therapists_id_seq OWNED BY public.therapists.id;


--
-- Name: uploadDocument; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public."uploadDocument" (
    id integer NOT NULL,
    url character varying(255)[],
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public."uploadDocument" OWNER TO chandjr;

--
-- Name: uploadDocument_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public."uploadDocument_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."uploadDocument_id_seq" OWNER TO chandjr;

--
-- Name: uploadDocument_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public."uploadDocument_id_seq" OWNED BY public."uploadDocument".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: chandjr
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO chandjr;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: chandjr
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO chandjr;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: chandjr
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- Name: documents id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.documents ALTER COLUMN id SET DEFAULT nextval('public.documents_id_seq'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Name: therapists id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.therapists ALTER COLUMN id SET DEFAULT nextval('public.therapists_id_seq'::regclass);


--
-- Name: uploadDocument id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public."uploadDocument" ALTER COLUMN id SET DEFAULT nextval('public."uploadDocument_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public."SequelizeMeta" (name) FROM stdin;
20230316105408-create_users_table.js
20230504072229-create-bookings.js
20230505072155-create-uploadDocument.js
20230505122714-create-therapists.js
20230506091446-create-patients.js
20230511070558-create-add-columns.js
20230511115819-add-booking-column.js
20230504103239-create-documents.js
\.


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public.bookings (id, patient, therapist, address, "addressType", "serviceType", latitude, "expiryTime", "scheduleTime", "uploadStatus", longitude, "therapistId", "patientId", "startTime", "endTime", date) FROM stdin;
31	{"id": 9, "DOB": "2023-05-04T11:42:17.801Z", "zip": "54000", "city": "lahore", "name": "www", "type": null, "state": "punjab", "gender": "female", "address": "house 136 block H1 , Johar town ", "country": "Pakistan", "phoneNo": "wwww", "zip_Two": "54000", "careDate": "2023-05-12T11:42:22.284Z", "city_Two": "Lahore", "lastName": "afaq", "latitude": 31.4722464, "relation": "ww", "firstName": "afaq", "longitude": 74.2670511, "phone_One": "0000", "phone_Two": "00000", "state_Two": "punjab", "expirytime": null, "middleName": "afaq", "phoneP_Two": null, "addressType": "home", "address_Two": "M-19, Mega Tower Gulberg 3, Lahore ", "country_Two": "Pakistan", "phone_Three": "00000", "serviceType": ["PT"], "latitude_Two": 31.5278276, "scheduletime": null, "uploadstatus": null, "applicationId": "moiz", "longitude_Two": 74.34937339999999, "addressType_Two": "community", "certificationPeriod": ["2023-05-10T11:42:24.419Z", "2023-06-05T11:42:24.419Z"]}	\N	house 136 block H1 , Johar town 	home	OT	31.4722464	\N	\N	completed	74.2670511	24	9	Fri May 12 2023 00:04:00 GMT+0500	Fri May 12 2023 00:04:00 GMT+0500	Thu May 11 2023 18:52:23 GMT+0500
32	{"id": 9, "DOB": "2023-05-04T11:42:17.801Z", "zip": "54000", "city": "lahore", "name": "www", "type": null, "state": "punjab", "gender": "female", "address": "house 136 block H1 , Johar town ", "country": "Pakistan", "phoneNo": "wwww", "zip_Two": "54000", "careDate": "2023-05-12T11:42:22.284Z", "city_Two": "Lahore", "lastName": "afaq", "latitude": 31.4722464, "relation": "ww", "firstName": "afaq", "longitude": 74.2670511, "phone_One": "0000", "phone_Two": "00000", "state_Two": "punjab", "expirytime": null, "middleName": "afaq", "phoneP_Two": null, "addressType": "home", "address_Two": "M-19, Mega Tower Gulberg 3, Lahore ", "country_Two": "Pakistan", "phone_Three": "00000", "serviceType": ["PT"], "latitude_Two": 31.5278276, "scheduletime": null, "uploadstatus": null, "applicationId": "moiz", "longitude_Two": 74.34937339999999, "addressType_Two": "community", "certificationPeriod": ["2023-05-10T11:42:24.419Z", "2023-06-05T11:42:24.419Z"]}	\N	M-19, Mega Tower Gulberg 3, Lahore 	community	OT	31.5278276	\N	\N	completed	74.34937339999999	24	9	Fri May 12 2023 00:00:00 GMT+0500	Fri May 12 2023 00:00:00 GMT+0500	Sat May 13 2023 19:05:07 GMT+0500
33	{"id": 9, "DOB": "2023-05-04T11:42:17.801Z", "zip": "54000", "city": "lahore", "name": "www", "type": null, "state": "punjab", "gender": "female", "address": "house 136 block H1 , Johar town ", "country": "Pakistan", "phoneNo": "wwww", "zip_Two": "54000", "careDate": "2023-05-12T11:42:22.284Z", "city_Two": "Lahore", "lastName": "afaq", "latitude": 31.4722464, "relation": "ww", "firstName": "afaq", "longitude": 74.2670511, "phone_One": "0000", "phone_Two": "00000", "state_Two": "punjab", "expirytime": null, "middleName": "afaq", "phoneP_Two": null, "addressType": "home", "address_Two": "M-19, Mega Tower Gulberg 3, Lahore ", "country_Two": "Pakistan", "phone_Three": "00000", "serviceType": ["PT"], "latitude_Two": 31.5278276, "scheduletime": null, "uploadstatus": null, "applicationId": "moiz", "longitude_Two": 74.34937339999999, "addressType_Two": "community", "certificationPeriod": ["2023-05-10T11:42:24.419Z", "2023-06-05T11:42:24.419Z"]}	\N	house 136 block H1 , Johar town 	home	OT	31.4722464	\N	\N	completed	74.2670511	24	9	Fri May 12 2023 00:04:00 GMT+0500	Fri May 12 2023 00:04:00 GMT+0500	Thu May 11 2023 18:52:23 GMT+0500
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public.documents (id, url, "checkInTime", "checkOutTime", type, address, "addressType", therapistid, userid, "bookingId", feedback, "createdAt", "updatedAt") FROM stdin;
1	{}	checkInTime	checkInTime	not normal	street	home	7	7	5	\N	2023-05-12 17:50:22.354+05	2023-05-12 17:50:22.354+05
2	{uploads/031a5101f445a7f1d9f6f2356d8bfb6a}	17:56:19	17:56:19	home	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	\N	2023-05-12 17:56:24.539+05	2023-05-12 17:56:24.539+05
3	{uploads/79a3377dc3fcd36df1d3b1876ddb3fad}	17:58:8	17:58:8	home	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 17:58:11.729+05	2023-05-12 17:58:11.729+05
4	{uploads/af69921a5577f1917e8c7b9493af4bea}	18:8:31	18:8:31	community	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 18:08:35.271+05	2023-05-12 18:08:35.271+05
5	{uploads/8e8a6c828dba2fcdc085098d577b501b}	18:11:33	18:11:33	home	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 18:11:37.372+05	2023-05-12 18:11:37.372+05
6	{uploads/7869d55e873095887af7709df441334b,uploads/b41fb086152ee452fb2f4af70b9264a3}	18:23:19	18:23:19	community	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 18:23:24.677+05	2023-05-12 18:23:24.677+05
7	{uploads/d6122948a41fb9ac6a3b1aeb248ed78d}	18:28:43	18:28:43	community	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 18:28:47.421+05	2023-05-12 18:28:47.421+05
8	{uploads/6a308b75e4db593d8883e20b5d3dd610}	18:30:47	18:30:47	home	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	29	Plan of care update	2023-05-12 18:30:50.611+05	2023-05-12 18:30:50.611+05
9	{uploads/6a05300e4ed22b1bf5906efdd6a0d0c5,uploads/1192a77a658faa0c4fa11e0043efb19b}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:30:54.986+05	2023-05-12 18:30:54.986+05
10	{uploads/dcdb8155761f409804ee862593c9a28d,uploads/d90302e588d1adca27aa656e495a0afe}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:32:23.579+05	2023-05-12 18:32:23.579+05
11	{uploads/1859a3b1a4e4c1c137c329e5b5a63109,uploads/f4a70af8ea3fb377552598899354066a}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:36:43.171+05	2023-05-12 18:36:43.171+05
12	{uploads/aa630ad946472c3feb8c11ce7a306b57,uploads/aafa3a16b97629787038ebfe1e03683a}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:36:58.31+05	2023-05-12 18:36:58.31+05
13	{uploads/3fdfe7b85c8f24f3e3bea294d8c7b380,uploads/c35b88d600309e4d0004b63b8eb93cc3}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:36:59.325+05	2023-05-12 18:36:59.325+05
14	{uploads/8a1cb48f119b5060c7a3e826dfc0e60a,uploads/349d4772ae9654a3c595830da7c612ca}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:39:11.836+05	2023-05-12 18:39:11.836+05
15	{uploads/5af93ac4d2ff5fe494bba2e97062817c,uploads/1aa512b97171deb5f41990c6b41c24ab}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:41:40.652+05	2023-05-12 18:41:40.652+05
16	{uploads/4e7f53cc93adc3c6a0f4c2fd144a4949}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:44:41.52+05	2023-05-12 18:44:41.52+05
17	{uploads/974f8dd7c5fadf48ca88b6fea92d52b5,uploads/e585e78f1b94e288552d478363af8623,uploads/56cff160618d78f1b8021029fe6d97af}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:44:53.793+05	2023-05-12 18:44:53.793+05
18	{uploads/edbef0c7c4bbf687e70ce01c94d09198,uploads/c1a70953a8ebe0f06c5973ad4ec9a55e,uploads/781a81237f88009ce989044b31e12479}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:45:20.498+05	2023-05-12 18:45:20.498+05
19	{uploads/07cb6a46445a4d4bbefc01f2ffc1fe46,uploads/cd60ef42202d4d30e82861f94afda072,uploads/3127d38492f01c7a3512d05fb5aefeba}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:46:05.772+05	2023-05-12 18:46:05.772+05
20	{uploads/56ee92aa607af8684ac7ae69d6036be2,uploads/ce40aee27ac1cd97b8655bd7d6e24e4c,uploads/9f68158cbd0dd0163d900a85acc69e7d}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:47:10.986+05	2023-05-12 18:47:10.986+05
21	{"uploads/874ed0f1-eda0-4481-af54-d265c0dc33ee 0.37098588836339275 Fri May 12 2023 18:48:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-08 20-24-09.png","uploads/de094075-2bbc-43b2-ae92-df76b23e65d5 0.038249407843295335 Fri May 12 2023 18:48:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-11 11-23-43.png","uploads/7e96edf4-fa11-409f-8c00-9ffd7a8b2e45 0.36703956628523904 Fri May 12 2023 18:48:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-11 16-40-22.png"}	checkInTime	checkInTime	not normal	street	home	7	7	5	abc	2023-05-12 18:48:52.78+05	2023-05-12 18:48:52.78+05
22	{"uploads/93ce2776-a622-4def-8d11-05b20707788b 0.5018617918647166 Fri May 12 2023 18:58:48 GMT+0500 (Pakistan Standard Time) scaled_scaled_scaled_scaled_scaled_scaled_Image-2497.jpg"}	18:58:42	18:58:42	community	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	30	Plan of care update	2023-05-12 18:58:49.095+05	2023-05-12 18:58:49.095+05
23	{uploads/9ffc4919-c2ae-429a-9ca6-21876c159be9IMG-20230511-WA0067.jpg}	19:5:42	19:6:53	home	M-19, Mega Tower Gulberg 3, Lahore 	community	24	24	32	\N	2023-05-12 19:06:56.154+05	2023-05-12 19:06:56.154+05
24	{uploads/c39e8638-bcdc-4a38-8042-7cb644031ef2IMG-20230511-WA0067.jpg}	19:13:38	19:13:38	home	house 136 block H1 , Johar town 	home	24	24	31	Client received services outside of the home	2023-05-12 19:13:40.94+05	2023-05-12 19:13:40.94+05
\.


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public.patients (id, "firstName", "middleName", "lastName", name, address, type, latitude, longitude, expirytime, scheduletime, uploadstatus, "addressType", "careDate", "certificationPeriod", "serviceType", gender, zip, city, country, state, "phoneNo", "phoneP_Two", "address_Two", "addressType_Two", "country_Two", "state_Two", "city_Two", "zip_Two", "applicationId", "DOB", "phone_One", "phone_Two", "phone_Three", relation, "createdAt", "updatedAt", "latitude_Two", "longitude_Two") FROM stdin;
3	jack	smith	will edit	ali	home	xyz	123	456	string	01-02-2000	string	abcstreet	01/01/1234	{abc,cde}	{OT,PT,ST}	gender	zip	city	london	state	phoneNo	12345	addressTwo	addressTypeTwo	countryTwo	stateTwo	cityTwo	zipTwo	12	1234	12345	4567	7890	relation	2023-05-06 14:16:35.274+05	2023-05-10 13:25:22.906+05	\N	\N
7	moiz	chand	abdul 	\N	johar  town lahore	\N	31.469693	74.27284610000001	\N	\N	\N	Home	2023-05-10T07:55:07.712Z	{2023-05-10T07:55:09.518Z,2023-06-05T07:55:09.518Z}	{PT,OT}	female	moiz	lahore	Pakistan	Punjab	03044229387	\N	mega tower gulburg 	community	Pakistan	punjab	Lahore	54000	moiz	2023-05-09T07:55:00.382Z	moiz	moiz	moiz	\N	2023-05-11 12:58:45.291+05	2023-05-11 18:22:21.983+05	31.5278276	74.34937339999999
8	mois patient 	mois patient 	mois patient 	chand	johar town lahore	\N	31.469693	74.27284610000001	\N	\N	\N	home	2023-05-12T14:36:13.852Z	{2023-05-11T14:36:16.223Z,2023-06-06T14:36:16.223Z}	{PT}	male	mois patient 	new-york	\N	\N	c\\100000	\N	mega tower gulburg 	community	\N	\N	los-angeles	00000000	mois patient 	2023-05-10T14:36:09.969Z	000000	0000000	0000	0000000	2023-05-11 19:37:16.234+05	2023-05-11 19:37:16.234+05	31.5164883	74.3499496
2	Bilawal	ali	jaffrihassan edit	ali	abcstreet	xyz	51.5072178	-0.1275862	string	01-02-2000	string	home	01/01/1234	{abc,cde}	{OT,PT,ST}	gender	zip	city	london	state	phoneNo	12345	addressTwo	addressTypeTwo	countryTwo	stateTwo	cityTwo	zipTwo	12	1234	12345	4567	7890	relation	2023-05-06 14:16:34.546+05	2023-05-11 19:37:33.453+05	\N	\N
9	afaq	afaq	afaq	www	house 136 block H1 , Johar town 	\N	31.4722464	74.2670511	\N	\N	\N	home	2023-05-12T11:42:22.284Z	{2023-05-10T11:42:24.419Z,2023-06-05T11:42:24.419Z}	{PT}	female	54000	lahore	Pakistan	punjab	wwww	\N	M-19, Mega Tower Gulberg 3, Lahore 	community	Pakistan	punjab	Lahore	54000	moiz	2023-05-04T11:42:17.801Z	0000	00000	00000	ww	2023-05-12 16:44:04.994+05	2023-05-12 16:44:38.981+05	31.5278276	74.34937339999999
1	jack	smith	will	ali	home	xyz	51.5072178	-0.1275862	string	01-02-2000	string	abcstreet	01/01/1234	{2023-06-05T12:00:37.783Z,2023-06-08T12:00:37.783Z}	{OT,PT,ST}	gender	zip	city	london	state	phoneNo	12345	addressTwo	addressTypeTwo	countryTwo	stateTwo	cityTwo	zipTwo	12	2023-05-31T11:38:15.392Z	12345	4567	7890	relation	2023-05-06 14:16:29.244+05	2023-05-12 17:00:43.775+05	\N	\N
\.


--
-- Data for Name: therapists; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public.therapists (id, "firstName", "middleName", "lastName", "fullName", "serviceType", gender, "DOB", "ssnNo", "hireDate", status, address, street, zip, city, state, country, "homePhoneNo", "emgName", "emgEmail", relationship, "phoneNo", "phone_One", "phone_Two", "accountEmail", password, "ProfessionalLicenseNo", "LicenseDate", "ExpDate", "proExpDate", "annualExpDate", "annualSelfExpDate", "annualFieldExpDate", "annualtrainExpDate", document, "createdAt", "updatedAt") FROM stdin;
21	dev test	dev test	dev test edit	\N	OT	female	2023-05-09T14:17:15.047Z	123	2023-05-05T14:17:19.443Z	deactive	dev test	dev test	1213131	los-angeles	\N	\N	dev test	dev@gamil.com	123456	dev test	dev test	dev test	dev test	chand@gmail.com	123456	chand test	2023-05-31T14:18:19.205Z	2023-05-30T14:18:20.968Z	2023-05-26T14:18:23.470Z	2023-05-31T14:18:25.460Z	2023-05-29T14:18:27.433Z	2023-05-26T14:18:35.659Z	2023-05-24T14:18:37.595Z	{"therapist/f4d74c0c-01ac-4804-9edc-501a965c2662 Screenshot from 2023-05-09 16-34-40.png","therapist/c39b56b5-3b09-4731-9abf-d6a29b987178 Screenshot from 2023-05-09 17-45-47.png"}	2023-05-10 19:18:51.4+05	2023-05-11 19:37:47.021+05
25	abdul	chand	moiz	\N	OT	female	2023-05-09T14:33:49.718Z	test	2023-05-12T14:34:00.667Z	deactive	test	test	test	houston	\N	Pakistan	03044229387	test	test	test	\N	\N	\N	moiz@gmail.com	123456789	test	2023-05-30T14:35:09.091Z	2023-05-29T14:35:11.047Z	2023-05-25T14:35:13.527Z	2023-05-31T14:35:15.456Z	2023-05-30T14:35:17.940Z	2023-05-26T14:35:20.041Z	2023-05-31T14:35:22.357Z	{"therapist/650ea1cd-4061-4088-9d0e-17137c34a8c6 Screenshot from 2023-05-11 11-23-43.png","therapist/49c7b5ac-683a-4ba4-b626-8126ef950308 Screenshot from 2023-05-08 20-24-09.png","therapist/c6166687-243a-4347-8615-13aecd905177 Screenshot from 2023-05-09 16-34-40.png"}	2023-05-11 19:35:24.017+05	2023-05-11 19:35:24.017+05
24	chand	chand	chand	\N	OT	female	2023-05-16T13:49:22.221Z	111111	2023-05-11T13:49:25.998Z	active	johar town lahore	johar town lahore	5400	chicago	test	pakistan	000000	johar town lahore	johar town lahore	johar town lahore	johar town lahore	johar town lahore	johar town lahore	chandjr0@gmail.com	123456	chand test	2023-05-31T12:00:55.188Z	2023-05-30T13:50:29.173Z	2023-05-31T13:50:31.455Z	2023-05-31T13:50:33.474Z	2023-05-30T13:50:35.405Z	2023-05-26T13:50:37.108Z	2023-05-24T13:50:38.988Z	{}	2023-05-11 18:50:44.146+05	2023-05-12 18:50:23.471+05
\.


--
-- Data for Name: uploadDocument; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public."uploadDocument" (id, url, "createdAt", "updatedAt") FROM stdin;
1	{"uploads/a82dbfc9-7cc0-402b-bf14-20e63aa98181 0.9909125588312444 Fri May 05 2023 12:22:21 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/9481db8d-6184-4164-943e-b4457cabc42e 0.21637893436824696 Fri May 05 2023 12:22:21 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/7c854219-e156-45ec-8d40-2548768ce8af 0.5145920857117254 Fri May 05 2023 12:22:21 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/e9970d46-f523-4eec-90e5-e2d3edd0b96d 0.4305058545090321 Fri May 05 2023 12:22:21 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-05 12:22:21.868+05	2023-05-05 12:22:21.868+05
2	{"uploads/dabde3e1-0cb6-43a5-888b-37a6caf4f252 0.20008341599807622 Fri May 05 2023 12:25:28 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/c8ea7795-ee97-4bca-92a6-97596f9d9413 0.24765273614331695 Fri May 05 2023 12:25:28 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/4c830009-88a3-4b40-b6a8-135a15d4f7cc 0.34070913279391357 Fri May 05 2023 12:25:28 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/488712a2-bc30-4b5c-87f6-baa60e7f473e 0.09277337783958473 Fri May 05 2023 12:25:28 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-05 12:25:28.593+05	2023-05-05 12:25:28.593+05
3	{"uploads/e8d4255f-24e5-4c49-add0-296a77705f50 0.9277963364797779 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/7778d1c8-96b4-481c-b59f-ec41ffa6e4b4 0.863278915029545 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/604b3a98-c7ea-4419-9119-344140acf767 0.03713348180891973 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/19adce8b-8123-4d25-a4a0-0c218024fa0f 0.8426457656487691 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/1e2c3b4a-269e-478d-bbe8-2cb28300e658 0.8583509947834309 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/5e42c7b4-1aab-4645-8b7e-e28515d4f250 0.3070055556539353 Fri May 05 2023 12:27:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 12:27:57.695+05	2023-05-05 12:27:57.695+05
4	{"uploads/af0e5017-70bf-4b0f-9924-e9089be6a6d7 0.3573804058298673 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/6a165fb4-351d-49a1-9da4-f54ed4d3150a 0.13497509594910362 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/d15e659c-3cb0-4f52-b94c-46f5026715a9 0.5547220669442157 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/1e611959-b49e-4a36-b9d8-51e5cfffa835 0.45180140396211055 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/d9d78a03-1740-470b-adc4-e5647e4db694 0.00548279136306018 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/57ac562e-0c63-48f9-a53e-8090154f017b 0.43454028570000314 Fri May 05 2023 12:40:00 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 12:40:00.188+05	2023-05-05 12:40:00.188+05
5	{"uploads/9bd01381-d838-46e7-a6fc-c4967e63942d 0.5706580469222648 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/a8814a99-0cee-4f25-bd08-6d269dfe61e2 0.1118055552413495 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/7314c97f-23f7-428d-8cb7-bc26fddb651f 0.9091443299330788 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/cc4ccdb5-ee39-4449-9c3e-3c080fccc695 0.7235260368827137 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/b881ce7d-403d-4b4a-aab0-f487070d649b 0.11822990316584114 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/4237b8ec-49ce-41dd-8d57-03b756473cf2 0.19448740347603577 Fri May 05 2023 12:40:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 12:40:40.688+05	2023-05-05 12:40:40.688+05
6	{"uploads/5b613183-4be7-43bb-8760-deca6b6b6e0d 0.17060267281710528 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/e82bdbf2-a62e-42fa-a034-580be2178cbc 0.14985310528401508 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/46e39ec6-57c7-448b-803e-50797ec7b580 0.18596257382046644 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/ab43e377-19da-4013-befe-2464c7ac8ff7 0.6864876330261611 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/7b7d0358-805d-444c-8d68-f286154c5b3f 0.12520749874829873 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/e663cb8e-e976-45a3-9580-6c3a17f649e7 0.35586390861428496 Fri May 05 2023 15:17:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 15:17:46.033+05	2023-05-05 15:17:46.033+05
7	{"uploads/ff8f4aca-6cc0-4ef3-8f75-659faf0d7c60 0.3705666978950273 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/28b282b1-bc0c-460e-9c1a-dccfb5f9ebf2 0.05663390265441226 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/4803ed95-12d4-47e3-824a-f9a6b574ccfc 0.5046410344420258 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/1a582b21-3156-4378-a063-fd0a68d68cea 0.6796639127162174 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/52115e8c-80bd-4bc2-baef-5a6ee47512eb 0.9483804544566543 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/bb8cb2e0-ce6c-464b-b53c-240d3ad36c0c 0.8959953460883352 Fri May 05 2023 15:49:57 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 15:49:57.399+05	2023-05-05 15:49:57.399+05
8	{uploads/d17550d189e088e700f1e2885bdcba95,uploads/caa64cd5edca8c6a74f490ca554115f6,uploads/12aa79139a0b6512a2cd70f57b774f2f,uploads/da089a5585ffecb9ad265af1017be3dd,uploads/bd5fb6641dc5e90bb171cc7c091d7772,uploads/5cf44901e954a72ff65987ad8b8520dc}	2023-05-05 15:53:32.952+05	2023-05-05 15:53:32.952+05
43	{"uploads/Screenshot from 2023-05-06 15-53-21.png"}	2023-05-06 17:02:50.846+05	2023-05-06 17:02:50.846+05
9	{"uploads/8c40ca98-8759-4ecc-b930-fb7f8025df8e 0.3923147714963551 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/a192c03c-1c4c-4196-9d2c-8d6026354650 0.2959849128925518 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/911754fb-4f42-4fe3-84a6-6747ab8430df 0.6081090811749861 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/629f7794-275f-4254-84e8-84017b6423af 0.07575377963861851 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/f0c3be60-f9d7-4de1-be2e-2df49f8af773 0.4300956608847972 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/7095ec86-f4d6-487e-9623-9e84c13290bf 0.6537331166420397 Fri May 05 2023 15:54:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 15:54:10.633+05	2023-05-05 15:54:10.633+05
10	{"uploads/30f9a730-d7f8-4897-8f07-edbae18020cd 0.17165731805305162 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/9dc128fd-a3f3-48a5-adee-05b18dd68444 0.21845738481690913 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/597a88ea-d2c4-4c55-ad3a-379f205faf2a 0.9460545695288154 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/22be1fc7-5de4-4b14-bea7-4f028caf0aac 0.39586944903501076 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/641ad9c2-ae60-499d-9c65-f56331e99793 0.9604877692288478 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/87e5f3fa-0431-4b9f-a46e-9fd10a591cb5 0.9581780908598969 Fri May 05 2023 15:58:37 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 15:58:37.628+05	2023-05-05 15:58:37.628+05
11	{"uploads/d50d6794-52d2-40d1-834c-ee34d42e0780 0.14246582586295897 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/c79a256a-26da-470b-a31f-3f5e1d6143fd 0.33666670475858274 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/72dc8999-8c6c-4361-bb72-c148b518da4d 0.5979549788258041 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/8094aa5f-5557-484e-b56d-7362052d440d 0.5923976118708711 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/a48422d3-5ca0-4b91-99d3-861e1651aa9c 0.01211572330576871 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/e517cf95-c924-4d4d-a3ec-efa51178c56d 0.2758791233010478 Fri May 05 2023 15:59:34 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 15:59:34.291+05	2023-05-05 15:59:34.291+05
12	{"uploads/63c2ad16-ee32-49bc-b94f-3f8ba8e143eb 0.07836369504640439 Fri May 05 2023 16:00:22 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png"}	2023-05-05 16:00:22.289+05	2023-05-05 16:00:22.289+05
13	{"uploads/61a0be77-8804-47b2-a919-11a3eb975fc4 0.8803044959788309 Fri May 05 2023 16:03:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/4f49b138-89b5-4325-91e5-9e22cfbc28e8 0.9598634820616894 Fri May 05 2023 16:03:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/c15d030f-ef4f-4bc4-8339-b30685ed1a94 0.7523829734384413 Fri May 05 2023 16:03:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/a23ba0c0-2c46-422a-999e-19bcc1a8dbab 0.12701762729847021 Fri May 05 2023 16:03:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-05 16:03:10.729+05	2023-05-05 16:03:10.729+05
14	{"uploads/92aee189-4e38-43f1-8a7b-20e706159a00 0.06583120665534192 Fri May 05 2023 16:07:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/cb50d980-496a-412d-93c6-5bc2a1f0e2e9 0.3708642204042467 Fri May 05 2023 16:07:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/60b2cebe-7bdd-4e00-9ebb-897dfe84f25b 0.21979218275884138 Fri May 05 2023 16:07:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/64a63a3d-2ede-4887-ae4f-2e221cbcb66e 0.7378948751468724 Fri May 05 2023 16:07:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-05 16:07:30.396+05	2023-05-05 16:07:30.396+05
15	{"uploads/f340ef72-ecd8-4b55-a648-5a37f2f09d8d 0.8747262904918964 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) evvApp.postman_collection.json","uploads/cdc2dabd-54f8-4c7c-9143-ebf0dc7196e2 0.6908218782130022 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/a0585194-56e0-4373-a2b8-07f6b831b5a4 0.6807350821094076 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/a3812b5c-fa39-448b-b525-98e8d17b0c83 0.8252342705956623 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/98e8bcbd-e912-4f02-8190-d75043424e03 0.4469387603103363 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/6e604bec-7565-414d-bb41-7963845c8258 0.8281716653933122 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) lms.postman_collection.json","uploads/3610c390-9e8b-40ab-a840-729bfcdcd7c6 0.7066279736106638 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/f6c15014-0d0a-4d7d-acde-c9d4abfe374b 0.2108749547574733 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (3rd copy).png","uploads/cb2247e2-08cc-4901-b6a0-6672e8a4d595 0.6892258159044673 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/9295e308-b5b4-4903-ada0-9ea981d756b8 0.178816873719025 Fri May 05 2023 16:13:26 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43.png"}	2023-05-05 16:13:26.437+05	2023-05-05 16:13:26.437+05
44	{"uploads/8e2010ac-f10a-41a3-ba3e-e92ddddfe2de 0.8828601110860217 Sat May 06 2023 17:16:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-06 15-53-21.png"}	2023-05-06 17:16:51.654+05	2023-05-06 17:16:51.654+05
45	{"uploads/d0c0f5fd-1432-4615-9c0f-414245b28afd 0.7098716402080603 Sat May 06 2023 17:17:39 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/9f9653b6-546f-4fec-b4b5-2bcea5c30dc2 0.333017350628672 Sat May 06 2023 17:17:39 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/bb6d4792-667e-4387-9d7f-283898c11b97 0.674444710986088 Sat May 06 2023 17:17:39 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/1d9ee89b-148f-4b87-86f5-ee46e8c8b7b6 0.9416201156103647 Sat May 06 2023 17:17:39 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-06 17:17:39.438+05	2023-05-06 17:17:39.438+05
16	{"uploads/3d24aabc-b5f7-401e-91cc-751625c59135 0.20925752807507347 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) evvApp.postman_collection.json","uploads/497e0c3c-8d9b-4e94-8dd0-e1eb96373a8d 0.3936103239095676 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/8e16997a-455f-4f4c-8cbd-c58d2e3d9ab7 0.19739167571635807 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/d0d290a1-ac28-4b6a-b814-f969b5e01fd1 0.4528895792234293 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/58aa78bc-31f6-4eda-9dbc-02468f9c98d3 0.3044375239831978 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/e93fe6a6-63f3-4789-aaeb-47aef278bd69 0.8268434916154814 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) lms.postman_collection.json","uploads/4daaa355-957a-4c43-8bf9-b1601f27af43 0.4426284949655257 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/42507d0d-bb5c-4992-8276-b90819f323ab 0.6439024238689044 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (3rd copy).png","uploads/e5c8dc7d-4fa5-4c5e-b96b-f140270bedbc 0.8564055034582703 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/76102133-d564-4bcc-8e35-6bc61a5fdf20 0.7052587025687291 Fri May 05 2023 16:23:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43.png"}	2023-05-05 16:23:23.371+05	2023-05-05 16:23:23.371+05
17	{"uploads/de3b305e-4c13-445f-9271-4c637aa148f9 0.2936975629944938 Fri May 05 2023 16:25:30 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-therapist-view-therapist-2023-05-04-19_56_45.pdf"}	2023-05-05 16:25:30.205+05	2023-05-05 16:25:30.205+05
18	{uploads/113b9edabac75dfe0c2fd01b1eaaf49e,uploads/69b62f580d6746682439a978c9e0afb6,uploads/f63be0c310f679b411ca44798ffc0470,uploads/c34e74bbdf440fd14936a71d78119484,uploads/ccbbcad3e9a2e03a906e9550501fe23f,uploads/af0db177901792c8c599b12a9f8690d4,uploads/1fd4ea032b693e71f2c26648dab41cc2,uploads/db3d4d2dc889a601f0031ddcd1739714,uploads/64d7b028d0aea2a415f8102d56abde7d,uploads/40a4d95529d24b238080b37dfdf20446}	2023-05-05 16:26:36.561+05	2023-05-05 16:26:36.561+05
19	{uploads/daa3b7bba6cabe329f9075fd4c6dbfd4}	2023-05-05 16:26:52.501+05	2023-05-05 16:26:52.501+05
20	{uploads/9e2dc3b18b9f54d6f47349e2b60c07be}	2023-05-05 16:29:37.604+05	2023-05-05 16:29:37.604+05
21	{uploads/91738cdec435932c8aec2a02abb959d6}	2023-05-05 16:49:19.871+05	2023-05-05 16:49:19.871+05
22	{uploads/cc569fd9ae11b20607c970ac9600dc04}	2023-05-05 17:07:26.642+05	2023-05-05 17:07:26.642+05
23	{uploads/0dd10b4a7485bac0898d5b79dac5d1b1}	2023-05-05 17:11:07.23+05	2023-05-05 17:11:07.23+05
24	{uploads/a162dc8f55bbb40b73b44a19b95ccb09}	2023-05-05 17:12:21.775+05	2023-05-05 17:12:21.775+05
25	{uploads/a45ad0bfef3c6a422fd573286b9de9b3}	2023-05-05 17:16:33.217+05	2023-05-05 17:16:33.217+05
26	{uploads/be876e21c398bf08f3d886ae7661b412}	2023-05-05 17:22:26.284+05	2023-05-05 17:22:26.284+05
27	{uploads/ca7d1fb23f430b98772a97b28fc3b1d9}	2023-05-05 17:30:07.612+05	2023-05-05 17:30:07.612+05
28	{uploads/40299d4894b7d37422ac7e51f4456205}	2023-05-05 17:41:12.368+05	2023-05-05 17:41:12.368+05
29	{"uploads/7922dbfa-9689-4332-84a7-78f5fbeef433 0.11860361246704465 Fri May 05 2023 17:44:29 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-therapist-view-therapist-2023-05-04-19_56_45.pdf"}	2023-05-05 17:44:29.44+05	2023-05-05 17:44:29.44+05
30	{"uploads/fd6fa5da-70ab-4e98-a811-6ab01607a676 0.5679892474919133 Fri May 05 2023 17:52:45 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43.png","uploads/0443ba5a-3e81-4525-88ad-767b5142e68a 0.9898447486925108 Fri May 05 2023 17:52:45 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/53db9a6a-20fc-448f-b084-aba3686a6293 0.790685611972777 Fri May 05 2023 17:52:45 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 17:52:45.914+05	2023-05-05 17:52:45.914+05
31	{"uploads/a824696c-9456-442b-9279-f4c1f34a28af 0.7236343092739244 Fri May 05 2023 17:58:48 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-therapist-view-therapist-2023-05-04-19_56_45.pdf"}	2023-05-05 17:58:48.081+05	2023-05-05 17:58:48.081+05
32	{"uploads/1011d898-9e28-46dc-b04f-b12120ecf63b 0.16822768704758673 Fri May 05 2023 18:03:58 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-therapist-add-therapist-2023-05-04-18_51_09.pdf"}	2023-05-05 18:03:58.82+05	2023-05-05 18:03:58.82+05
33	{"uploads/3224e624-0267-4050-a0fc-51c908e3ff01 0.5646967625983634 Fri May 05 2023 18:04:09 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-01 17-39-32.png"}	2023-05-05 18:04:09.544+05	2023-05-05 18:04:09.544+05
34	{"uploads/9fb5947b-e370-4703-bcf9-3e03d642b3de 0.15285129693450994 Fri May 05 2023 18:04:18 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-01 17-39-32.png"}	2023-05-05 18:04:18.333+05	2023-05-05 18:04:18.333+05
35	{"uploads/9019fd05-e99d-49cd-91c4-edad6155ea48 0.8812862490606994 Fri May 05 2023 18:10:36 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-01 17-39-32.png"}	2023-05-05 18:10:36.983+05	2023-05-05 18:10:36.983+05
36	{"uploads/17bb3b80-329c-442b-b2d0-b2e7e9c19418 0.808451706392979 Fri May 05 2023 18:36:01 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43.png","uploads/566d9cba-0be5-4a7d-bd5b-3012f941a943 0.6689198950130757 Fri May 05 2023 18:36:01 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (copy).png","uploads/5479dc1f-54f6-4622-ad52-52b09d2a49d3 0.30577160956428817 Fri May 05 2023 18:36:01 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (9th copy).png"}	2023-05-05 18:36:01.786+05	2023-05-05 18:36:01.786+05
37	{"uploads/c404de62-2eec-4c56-817b-f49cfbe4df90 0.5331994802816786 Fri May 05 2023 19:40:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-01 17-39-32.png"}	2023-05-05 19:40:46.391+05	2023-05-05 19:40:46.391+05
38	{"uploads/2e812b01-114c-42b0-ad31-7232629ad38d 0.4654471506931288 Fri May 05 2023 19:47:23 GMT+0500 (Pakistan Standard Time) evvApp.zip"}	2023-05-05 19:47:25.779+05	2023-05-05 19:47:25.779+05
39	{"uploads/c2b22f7f-b16b-4f3f-9244-e00b07f1dc13 0.7509924467180755 Fri May 05 2023 20:12:59 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-paitent-view-schedule-2023-05-05-20_11_19.pdf"}	2023-05-05 20:12:59.542+05	2023-05-05 20:12:59.542+05
40	{"uploads/66e82708-8e05-4277-88a4-0425b2710ab1 0.8838085332674566 Fri May 05 2023 20:14:19 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-paitent-view-schedule-2023-05-05-20_11_19.pdf"}	2023-05-05 20:14:19.321+05	2023-05-05 20:14:19.321+05
41	{"uploads/2b55b53d-f1d5-42a0-9561-cba55b6901f6 0.03050507875641717 Fri May 05 2023 20:15:00 GMT+0500 (Pakistan Standard Time) screencapture-localhost-3000-therapist-add-therapist-2023-05-05-19_59_56.pdf"}	2023-05-05 20:15:00.428+05	2023-05-05 20:15:00.428+05
42	{"uploads/a6c9ebfe-0427-46e9-bbaa-66e87e93dfd3 0.46372896262302277 Sat May 06 2023 17:01:09 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-06 15-53-21.png"}	2023-05-06 17:01:09.476+05	2023-05-06 17:01:09.476+05
46	{"uploads/a5a577cf-9133-40ea-8503-ad4d24ddd761 0.17860927870317145 Sat May 06 2023 17:25:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/14df5dc2-8054-4fca-9497-9abf19a04f64 0.4034553667824512 Sat May 06 2023 17:25:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/7e64e02e-3923-4597-a8a6-862e02131e8d 0.007036124932172871 Sat May 06 2023 17:25:46 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-06 17:25:46.927+05	2023-05-06 17:25:46.927+05
47	{"uploads/bd4e0663-527d-465f-be22-077638a64714 0.5665999636998165 Sat May 06 2023 17:26:52 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/a260407e-87cb-452f-ab83-5e61650adc29 0.4148506511170218 Sat May 06 2023 17:26:52 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/87ad6092-c610-46a0-bde3-cf0cb3af4821 0.3064692864639931 Sat May 06 2023 17:26:52 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-06 17:26:52.131+05	2023-05-06 17:26:52.131+05
48	{"uploads/7ad97492-992b-49cc-80bd-0653cc925de3 0.9539759682577784 Sat May 06 2023 17:28:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/78d95d9b-484f-4898-82e5-ed94180ecf95 0.40784033192844693 Sat May 06 2023 17:28:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/a879c4d9-356e-4c4d-9f55-f6576b5c0267 0.0089662811154676 Sat May 06 2023 17:28:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-06 17:28:44.587+05	2023-05-06 17:28:44.587+05
49	{"uploads/e7009d65-972d-487d-b5c2-cba6c951ccd7 0.44673653577572336 Sat May 06 2023 17:29:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/91294b06-46ed-4b92-b1bb-6757962feb7a 0.8830056659241501 Sat May 06 2023 17:29:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/cd0b43b0-eb07-4509-a064-07954d5d8c2c 0.4742735518235457 Sat May 06 2023 17:29:30 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png"}	2023-05-06 17:29:30.116+05	2023-05-06 17:29:30.116+05
50	{"uploads/b6da7359-8a15-42a3-8c00-487d9c386675 0.5924699366023891 Sat May 06 2023 17:30:19 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/b6ce1a68-c2db-4654-8392-5a9d6e4185ff 0.5561979267066184 Sat May 06 2023 17:30:19 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:30:19.733+05	2023-05-06 17:30:19.733+05
51	{"uploads/636884dd-9d17-4325-8981-021c941e8918 0.453533597288992 Sat May 06 2023 17:31:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/46559da8-8665-4391-8622-9f6198ac098d 0.8004578252088106 Sat May 06 2023 17:31:23 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:31:23.519+05	2023-05-06 17:31:23.519+05
52	{"uploads/3fd506d5-673e-454b-b632-7341c0abec2e 0.00017714556256032132 Sat May 06 2023 17:31:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/09c530c0-003b-42d4-b187-c4f28f07aecf 0.8201944001587236 Sat May 06 2023 17:31:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:32:03.797+05	2023-05-06 17:32:03.797+05
53	{"uploads/82043089-8115-4f7d-aace-480450262233 0.25661689800122245 Sat May 06 2023 17:35:06 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/af246b3b-e813-465d-93d3-0f4a7ab2c1a4 0.3352018322446355 Sat May 06 2023 17:35:06 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:35:08.414+05	2023-05-06 17:35:08.414+05
54	{"uploads/a647e922-6584-48ad-9796-45810645b20b 0.033749480944261556 Sat May 06 2023 17:35:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/8601a33b-75f3-4119-b753-79bc623dd152 0.0953116416070674 Sat May 06 2023 17:35:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:35:32.008+05	2023-05-06 17:35:32.008+05
55	{"uploads/d71dad40-8d9f-4460-a0f7-ab37c0f64eaf 0.15168895854827458 Sat May 06 2023 17:35:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/880f3991-43c4-4963-9407-9e9d981ac52e 0.45962110678900325 Sat May 06 2023 17:35:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png","uploads/cdc47990-431d-4c62-9956-615adbdfb8d3 0.539226990873906 Sat May 06 2023 17:35:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (6th copy).png","uploads/111b5320-488d-45fc-8f4a-27a8b894a159 0.29317911932375096 Sat May 06 2023 17:35:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (8th copy).png","uploads/1fa2a3b6-9795-4d8a-a353-6b9ed63dcf6f 0.5037124464072547 Sat May 06 2023 17:35:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-05-06 15-53-21.png","uploads/601e70dd-3b76-4ed8-803a-b4670127f3e0 0.11637387713618064 Sat May 06 2023 17:35:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/5b2b56d0-d72d-49e3-9ca3-fe87e22dc4ad 0.6915049758969751 Sat May 06 2023 17:35:44 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png"}	2023-05-06 17:35:44.027+05	2023-05-06 17:35:44.027+05
56	{"uploads/65ed06d3-5360-41ac-be4d-1163fff91fc6 0.05584295211743728 Sat May 06 2023 17:36:12 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/48337e77-91b0-4d3c-a47b-d41c95e99045 0.9732653230502435 Sat May 06 2023 17:36:12 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/f6247da8-8d0e-4774-a3d4-f3773d9813d3 0.15812371628797428 Sat May 06 2023 17:36:12 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/8f9abfc6-78aa-4ff7-ae81-b06f1f6cf0f6 0.5483075813402476 Sat May 06 2023 17:36:12 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:36:12.727+05	2023-05-06 17:36:12.727+05
57	{"uploads/6790666b-6f02-4e5a-ba8f-93e7c396f4fb 0.44984203992888694 Sat May 06 2023 17:45:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/56be3c86-24ad-4d92-a6c1-80270020f149 0.3971779561895341 Sat May 06 2023 17:45:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/1758a3ba-b9d0-4592-abb8-eb05145766b6 0.11975384139365985 Sat May 06 2023 17:45:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/a06235f6-b9f6-465a-96d8-d506c8a43ede 0.37965024738102193 Sat May 06 2023 17:45:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:45:56.145+05	2023-05-06 17:45:56.145+05
58	{"uploads/257ff718-ca26-444b-8e20-d64e333c5ca0 0.3517687495719437 Sat May 06 2023 17:52:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/02d066d4-4452-460d-8c5b-930c7d95bf88 0.29149847553889474 Sat May 06 2023 17:52:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/0f4ea77f-d705-4098-a2c8-1615333ef623 0.04435480934806968 Sat May 06 2023 17:52:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/461bd280-7e13-453f-9350-605f5ba94310 0.27221322265283887 Sat May 06 2023 17:52:51 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:52:51.961+05	2023-05-06 17:52:51.961+05
59	{"uploads/e4e8fb78-1d67-46a8-bb3b-d0a38fa4745a 0.7790201227677038 Sat May 06 2023 17:53:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/7d18dcf3-86b2-4ae7-8819-10f9c4f51fe2 0.2524797643162153 Sat May 06 2023 17:53:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/dbd6082f-e4ae-452a-8592-557e73303b10 0.8313219934327094 Sat May 06 2023 17:53:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/725e7289-5b17-4fb1-b201-788fc1970bc0 0.8953326275946676 Sat May 06 2023 17:53:10 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:53:10.25+05	2023-05-06 17:53:10.25+05
60	{"uploads/1767157d-f069-4b27-be16-4572ebddb075 0.21011698440840476 Sat May 06 2023 17:53:22 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/da464b34-df99-4105-87b3-7b87125131fa 0.5304353643228565 Sat May 06 2023 17:53:22 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/83d9304b-a109-4af3-b96e-ff1a89f4fb0c 0.08025582439468892 Sat May 06 2023 17:53:22 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/8ab181ce-406f-4e2e-b450-82add3915168 0.2752955952759486 Sat May 06 2023 17:53:22 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:53:22.225+05	2023-05-06 17:53:22.225+05
61	{"uploads/415cf7d8-f7c3-4046-9d14-f6115457d3a1 0.7953543896661082 Sat May 06 2023 17:53:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/40b33c7b-be81-4d9d-8964-6cd4669dee9b 0.41257490609941905 Sat May 06 2023 17:53:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/9e3664b9-b262-4a0b-88e9-c66eedad3da3 0.34000277008613544 Sat May 06 2023 17:53:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/67818357-c343-41c6-962a-a69479fabcf6 0.9818507161951928 Sat May 06 2023 17:53:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:53:31.814+05	2023-05-06 17:53:31.814+05
62	{"uploads/8c397717-a234-423f-b36a-2cf07024cc52 0.5373926976110615 Sat May 06 2023 17:55:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/f88f37c9-665e-419d-bd26-426a838c6967 0.9151430188488947 Sat May 06 2023 17:55:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/2daf99ae-6bdb-494d-9f5d-ec00f412b525 0.22337142889351558 Sat May 06 2023 17:55:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/93e5c37d-45ee-419a-a013-45f2af11add7 0.46244271334355136 Sat May 06 2023 17:55:43 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:55:43.723+05	2023-05-06 17:55:43.723+05
63	{"uploads/b742888a-26c6-4760-85cd-ccdc09b1d13e 0.9492165514372986 Sat May 06 2023 17:57:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/1bf62946-41d3-4c65-b6da-d7a853509389 0.4513709383665172 Sat May 06 2023 17:57:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/43fe3b2f-3655-4107-b6c9-85e4c679ee6e 0.3165777700372532 Sat May 06 2023 17:57:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/9e49814f-7510-4502-81aa-df8e187d691d 0.717150519167336 Sat May 06 2023 17:57:31 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 17:57:31.842+05	2023-05-06 17:57:31.842+05
64	{"uploads/86b527bf-fd37-4552-8bc9-14311e6f2e9f 0.38724669724263316 Sat May 06 2023 18:00:20 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","uploads/960f6ae4-58b0-48f3-ad69-4b134b5f8844 0.9626298051086859 Sat May 06 2023 18:00:20 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","uploads/05e75421-a793-43ab-a8ce-018df478dcc9 0.8804756943916425 Sat May 06 2023 18:00:20 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","uploads/deb864ce-157e-4830-843a-cee91295647a 0.845108247975495 Sat May 06 2023 18:00:20 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:00:20.736+05	2023-05-06 18:00:20.736+05
65	{"downloads/22105702-e5a4-4373-ab31-0cde2f6d4713 0.6044612386146502 Sat May 06 2023 18:01:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","downloads/1c77736d-20d6-4e1b-90af-c1e1ccf2a78b 0.0037458854703527056 Sat May 06 2023 18:01:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","downloads/c32248d0-d13d-4eb5-b0b7-56aee55d980d 0.3251054032931786 Sat May 06 2023 18:01:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","downloads/c0ed2da9-e489-4a77-8021-69f3a3ed223d 0.21063773619804604 Sat May 06 2023 18:01:56 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:01:56.668+05	2023-05-06 18:01:56.668+05
66	{"downloads/085269ed-c388-4e7c-82ce-8017149ece97 0.3861767887252776 Sat May 06 2023 18:05:58 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","downloads/2d3ff988-2ac2-4714-b006-424b47542392 0.12281892542893291 Sat May 06 2023 18:05:58 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","downloads/33318d2b-e3db-4bc9-97fc-bcb9ed0e6451 0.0663332256199054 Sat May 06 2023 18:05:58 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","downloads/3e3b63f8-ab2a-4293-aecc-cec934574200 0.5193674021856911 Sat May 06 2023 18:05:58 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:06:06.146+05	2023-05-06 18:06:06.146+05
67	{"downloads/145b6f21-0f6a-4df6-9635-ff4b65794e15 0.593954847809437 Sat May 06 2023 18:17:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","downloads/3eef82bd-e57a-4e73-9310-e1714c662723 0.09998592407962925 Sat May 06 2023 18:17:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","downloads/619a4733-a3a0-4c56-a13e-73f671f5dceb 0.9526331956917999 Sat May 06 2023 18:17:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","downloads/61f6ba75-3fdc-413b-947d-24132ad446b1 0.6632842140022748 Sat May 06 2023 18:17:40 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:17:40.662+05	2023-05-06 18:17:40.662+05
68	{"downloads/b377a5f2-f4bf-403a-96df-d88dc802976b 0.505566643671425 Sat May 06 2023 18:17:59 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","downloads/25c0f7da-dd15-415b-a108-309002548fbb 0.5941790440457322 Sat May 06 2023 18:17:59 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","downloads/27c97e10-8b56-41a7-8500-01fd520dc105 0.9498733181283658 Sat May 06 2023 18:17:59 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","downloads/33916d97-e54b-400b-bab4-9d44d1392146 0.9868038406891873 Sat May 06 2023 18:17:59 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:17:59.813+05	2023-05-06 18:17:59.813+05
69	{"downloads/e637391a-cf02-4bac-a32c-2480559058c4 0.33574796902274917 Sat May 06 2023 18:18:53 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (5th copy).png","downloads/2a53bc11-d401-4b01-a7a5-5f31c41e71c9 0.07428396656726766 Sat May 06 2023 18:18:53 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (4th copy).png","downloads/c35f8aea-1d51-441a-9511-f1543fa9e4dc 0.9245643216560084 Sat May 06 2023 18:18:53 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (another copy).png","downloads/20a2e308-3227-4c9d-a46d-a2cbcdd598d5 0.23632332859353555 Sat May 06 2023 18:18:53 GMT+0500 (Pakistan Standard Time) Screenshot from 2023-03-30 14-12-43 (7th copy).png"}	2023-05-06 18:18:53.357+05	2023-05-06 18:18:53.357+05
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: chandjr
--

COPY public.users (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
1	bilawal	bilawal@gmail.com	$2b$10$WI2Z3OH/QMiW8A4dbTfKHOa0Xe3sAQTwXVOK/vePDFQDg2mFawc26	2023-03-16 18:27:45.575+05	2023-03-16 18:27:45.575+05
3	bilawal	bilawalhassan@gmail.com	$2b$10$PvYHVsAKvVbbSqy9RYUpr.SMOudF41t/w2ZPObF7.px89B.chWoH.	2023-03-16 18:42:04.716+05	2023-03-16 18:42:04.716+05
5	bilawal	awais@gmail.com	123456789	2023-03-17 16:25:27.483+05	2023-03-17 16:25:27.483+05
14	bilawal	awas123@gmail.com	123456789	2023-03-17 16:49:32.795+05	2023-03-17 16:49:32.795+05
16	bilawal	awais123@gmail.com	123456789	2023-03-17 16:54:46.333+05	2023-03-17 16:54:46.333+05
22	bilawal	chand@gmail.com	123456789	2023-03-17 17:00:45.57+05	2023-03-17 17:00:45.57+05
40	bilawal	bilawalhasaan@gmail.com	123456789	2023-03-20 11:12:50.6+05	2023-03-20 11:12:50.6+05
52	usama	usama@gmail.com	123456789	2023-03-20 13:39:15.144+05	2023-03-20 13:39:15.144+05
53	afaq	afaq@gmail.com	123456789	2023-03-20 13:49:18.205+05	2023-03-20 13:49:18.205+05
54	ali	ali@gmail.com	123456789	2023-03-20 13:50:21.19+05	2023-03-20 13:50:21.19+05
55	hassan	hassan@gmail.com	123456789	2023-03-20 14:59:35.603+05	2023-03-20 14:59:35.603+05
59	hassan	afaqawan@gmail.com	123456789	2023-03-22 11:56:34.692+05	2023-03-22 11:56:34.692+05
\.


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public.bookings_id_seq', 33, true);


--
-- Name: documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public.documents_id_seq', 24, true);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public.patients_id_seq', 9, true);


--
-- Name: therapists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public.therapists_id_seq', 25, true);


--
-- Name: uploadDocument_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public."uploadDocument_id_seq"', 69, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: chandjr
--

SELECT pg_catalog.setval('public.users_id_seq', 61, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- Name: documents documents_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (id);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: therapists therapists_accountEmail_key; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.therapists
    ADD CONSTRAINT "therapists_accountEmail_key" UNIQUE ("accountEmail");


--
-- Name: therapists therapists_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.therapists
    ADD CONSTRAINT therapists_pkey PRIMARY KEY (id);


--
-- Name: uploadDocument uploadDocument_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public."uploadDocument"
    ADD CONSTRAINT "uploadDocument_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: chandjr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

